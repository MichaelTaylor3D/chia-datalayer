const { callAndAwaitChiaRPC } = require("./rpc-base");
const { defaultConfig } = require("../utils/api-utils");

class DataLayer {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  getConfig() {
    return this.config;
  }

  setConfig(config) {
    this.config = { ...this.config, ...config };
  }

  addMirror(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/add_mirror`,
      params,
      this.config,
      options
    );
  }

  addMissingFiles(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/add_missing_files`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  createDataStore(params = {}, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/create_data_store`,
      params,
      this.config,
      options
    );
  }

  deleteMirror(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/delete_mirror`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getKeys(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_keys`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getKeysValues(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_keys_values`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getKvDiff(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_kv_diff`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getMirrors(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_mirrors`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getOwnedStores(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_owned_stores`,
      {},
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getRoot(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_root`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  walletLogin(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/wallet_log_in`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getRootHistory(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_root_history`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getSubscriptions(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/subscriptions`,
      {},
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getSyncStatus(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_sync_status`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getValue(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_value`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  plugins(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/check_plugins`,
      {},
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  removeSubscriptions(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/remove_subscription`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  subscribe(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/subscribe`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  unsubscribe(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/unsubscribe`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  updateDataStore(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/batch_update`,
      params,
      this.config,
      {
        ...options,
        includeFee: Boolean(submit_on_chain),
      }
    );
  }
}

module.exports = DataLayer;
