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
        includeFee: false,
        ...options,
      }
    );
  }

  createDataStore(params = {}, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/create_data_store`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  deleteMirror(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/delete_mirror`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getKeys(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_keys`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getKeysValues(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_keys_values`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getKvDiff(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_kv_diff`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getMirrors(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_mirrors`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getOwnedStores(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_owned_stores`,
      {},
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getRoot(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_root`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  walletLogin(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/wallet_log_in`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getRootHistory(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_root_history`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getSubscriptions(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_subscriptions`,
      {},
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getSyncStatus(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_sync_status`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getValue(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_value`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  plugins(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/plugins`,
      {},
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  removeSubscriptions(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/remove_subscription`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  subscribe(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/subscribe`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  unsubscribe(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/unsubscribe`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  updateDataStore(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/batch_update`,
      params,
      this.config,
      options
    );
  }
}

module.exports = DataLayer;