const { callAndAwaitChiaRPC } = require("./rpc-base");
const { defaultConfig } = require("../utils/api-utils");

module.exports = (config) => {
  if (!config) {
    config = defaultConfig;
  }
  
  return {
    addMirror: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/add_mirror`,
        params,
        config
      );
    },

    addMissingFiles: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/add_missing_files`,
        params,
        config,
        { includeFee: false }
      );
    },

    createDataStore: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/create_data_store`,
        params,
        config
      );
    },

    deleteMirror: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/delete_mirror`,
        params,
        config
      );
    },

    getKeys: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_keys`,
        params,
        config,
        { includeFee: false }
      );
    },

    getKeysValues: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_keys_values`,
        params,
        config,
        { includeFee: false }
      );
    },

    getKvDiff: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_kv_diff`,
        params,
        config,
        { includeFee: false }
      );
    },

    getMirrors: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_mirrors`,
        params,
        config,
        { includeFee: false }
      );
    },

    getOwnedStores: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_owned_stores`,
        params,
        config,
        { includeFee: false }
      );
    },

    getRoot: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_root`,
        params,
        config,
        { includeFee: false }
      );
    },

    getRootHistory: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_root_history`,
        params,
        config,
        { includeFee: false }
      );
    },

    getSubscriptions: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_subscriptions`,
        params,
        config,
        { includeFee: false }
      );
    },

    getSyncStatus: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_sync_status`,
        params,
        config,
        { includeFee: false }
      );
    },

    getValue: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_value`,
        params,
        config,
        { includeFee: false }
      );
    },

    plugins: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/plugins`,
        params,
        config,
        { includeFee: false }
      );
    },

    removeSubscription: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/remove_subscription`,
        params,
        config,
        { includeFee: false }
      );
    },

    subscribe: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/subscribe`,
        params,
        config,
        { includeFee: false }
      );
    },

    unsubscribe: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/unsubscribe`,
        params,
        config,
        { includeFee: false }
      );
    },

    updateDataStore: (params) => {
      return callAndAwaitChiaRPC(
        `${config.datalayer_host}/batch_update`,
        params,
        config
      );
    },
  };
};
