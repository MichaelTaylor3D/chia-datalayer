const superagent = require("superagent");
const chiaFeeEstimator = require("chia-fee-estimator");
const https = require("https");
const wallet = require("./wallet");
const { getBaseOptions } = require("../utils/api-utils");

const callAndAwaitChiaRPC = async (
  url,
  params,
  config,
  options = {
    includeFee: true,
    maxAttempts: 10,
    waitForWalletAvailability: true,
    allowUnverifiedCert: true,
  }
) => {
  options.includeFee = options.includeFee ?? true;
  options.maxAttempts = options.maxAttempts ?? 10;
  options.waitForWalletAvailability = options.waitForWalletAvailability ?? true;
  options.allowUnverifiedCert = options.allowUnverifiedCert ?? true;

  const { cert, key } = getBaseOptions(config);

  for (let attempt = 0; attempt < options.maxAttempts; attempt++) {
    if (options.waitForWalletAvailability) {
      await wallet.walletIsSynced(config);
      await wallet.waitForAllTransactionsToConfirm(config);
    }

    const body = {
      ...params,
    };

    if (options.includeFee) {
      chiaFeeEstimator.configure(config);
      body.fee = await chiaFeeEstimator.getFeeEstimate(config);
    }

    console.log(
      `Calling Chia RPC... ${JSON.stringify({
        url,
      })}`
    );

    try {
      const requestPromise = superagent
        .post(url)
        .send(body)
        .set("Content-Type", "application/json")
        .key(key)
        .cert(cert);

      if (options.allowUnverifiedCert) {
        requestPromise.agent(new https.Agent({ rejectUnauthorized: false }));
      }

      const response = await requestPromise;

      if (!response.body.success) {
        if (
          response.body.error ===
          "Changelist resulted in no change to tree data"
        ) {
          return { success: true, message: response.body.error };
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
