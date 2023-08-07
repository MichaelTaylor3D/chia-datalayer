const superagent = require("superagent");
const https = require("https");
const os = require("os");
const path = require("path");
const fs = require("fs");
const { getChiaRoot } = require("../utils/chia-root");
const fullnode = require("./fullnode");

const getBaseOptions = (config) => {
  const chiaRoot = getChiaRoot();
  let cert, key;

  if (process.env.CHIA_CERT_BASE64 && process.env.CHIA_KEY_BASE64) {
    console.log(`Using cert and key from environment variables.`);

    cert = Buffer.from(process.env.CHIA_CERT_BASE64, "base64").toString(
      "ascii"
    );
    key = Buffer.from(process.env.CHIA_KEY_BASE64, "base64").toString("ascii");
  } else {
    let certificateFolderPath =
      config.certificate_folder_path || `${chiaRoot}/config/ssl`;

    // If certificateFolderPath starts with "~", replace it with the home directory
    if (certificateFolderPath.startsWith("~")) {
      certificateFolderPath = path.join(
        os.homedir(),
        certificateFolderPath.slice(1)
      );
    }

    const certFile = path.resolve(
      `${certificateFolderPath}/data_layer/private_data_layer.crt`
    );
    const keyFile = path.resolve(
      `${certificateFolderPath}/data_layer/private_data_layer.key`
    );

    cert = fs.readFileSync(certFile);
    key = fs.readFileSync(keyFile);
  }

  const baseOptions = {
    method: "POST",
    cert,
    key,
    timeout: 300000,
  };

  return baseOptions;
};

const callAndAwaitChiaRPC = async (
  url,
  params,
  config,
  options = { includeFee: true, maxAttempts: 10 }
) => {
  const { cert, key } = getBaseOptions();

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await wallet.walletIsSynced(config);
    await wallet.waitForAllTransactionsToConfirm(config);

    const body = {
      ...params,
    };

    if (options.includeFee) {
      body.fee = await fullnode.getFeeEstimate(config);
    }

    console.log(
      `Calling Chia RPC... ${JSON.stringify({
        url,
      })}`
    );

    try {
      const response = await superagent
        .post(url)
        .send(body)
        .set("Content-Type", "application/json")
        .key(key)
        .cert(cert)
        .agent(new https.Agent({ rejectUnauthorized: false }));

      if (!response.body.success) {
        if (
          response.body.error ===
          "Changelist resulted in no change to tree data"
        ) {
          return { success: true, message: response.body.error };
        }

        if (response.body.error.includes("non-hexadecimal number")) {
          console.log(params);
        }

        throw new Error(
          `FAILED: Calling Chia RPC: ${url} ${JSON.stringify(response.body)}}}`
        );
      }

      return response.body;
    } catch (error) {
      console.log(error);

      if (attempt + 1 < options.maxAttempts) {
        console.error("Retrying...");
      } else {
        return { success: false, error: error.message };
      }
    }
  }
};

module.exports = {
  getBaseOptions,
  callAndAwaitChiaRPC,
};
