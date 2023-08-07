const { callAndAwaitChiaRPC } = require("./rpc-base");

module.exports = (config) => {
  return {
    addMirror: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/add_mirror`,
        params,
        config
      );
    },

    addMissingFiles: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/add_missing_files`,
        params,
        config,
        { includeFee: false }
      );
    },

    createDataStore: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/create_data_store`,
        params,
        config
      );
    },

    deleteMirror: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/delete_mirror`,
        params,
        config
      );
    },

    getKeys: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_keys`,
        params,
        config,
        { includeFee: false }
      );
    },

    getKeysValues: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_keys_values`,
        params,
        config,
        { includeFee: false }
      );
    },

    getKvDiff: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_kv_diff`,
        params,
        config,
        { includeFee: false }
      );
    },

    getMirrors: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_mirrors`,
        params,
        config,
        { includeFee: false }
      );
    },

    getOwnedStores: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_owned_stores`,
        params,
        config,
        { includeFee: false }
      );
    },

    getRoot: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_root`,
        params,
        config,
        { includeFee: false }
      );
    },

    getRootHistory: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_root_history`,
        params,
        config,
        { includeFee: false }
      );
    },

    getSubscriptions: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_subscriptions`,
        params,
        config,
        { includeFee: false }
      );
    },

    getSyncStatus: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_sync_status`,
        params,
        config,
        { includeFee: false }
      );
    },

    getValue: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/get_value`,
        params,
        config,
        { includeFee: false }
      );
    },

    plugins: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/plugins`,
        params,
        config,
        { includeFee: false }
      );
    },

    removeSubscription: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/remove_subscription`,
        params,
        config,
        { includeFee: false }
      );
    },

    subscribe: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/subscribe`,
        params,
        config,
        { includeFee: false }
      );
    },

    unsubscribe: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/unsubscribe`,
        params,
        config,
        { includeFee: false }
      );
    },

    updateDataStore: async (params) => {
      return await callAndAwaitChiaRPC(
        `${config.datalayer_host}/batch_update`,
        params,
        config
      );
    },
  };
};

module.exports = {
  addMirror,
  addMissingFiles,
  createDataStore,
  deleteMirror,
  getKeys,
  getKeysValues,
  getKvDiff,
  getMirrors,
  getOwnedStores,
  getRoot,
  getRootHistory,
  getSubscriptions,
  getSyncStatus,
  getValue,
  plugins,
  removeSubscription,
  subscribe,
  unsubscribe,
  updateDataStore,
};
