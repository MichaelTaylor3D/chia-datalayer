// wallet.d.ts
declare module "chia-datalayer" {
  export interface Config {
    full_node_host?: string;
    wallet_host?: string;
    certificate_folder_path?: string;
    default_wallet_id?: number;
    default_fee?: number;
    default_mirror_coin_amount?: number;
    allowUnverifiedCert?: boolean;
    verbose?: boolean;
  }

  export interface AddMirrorParams {
    id: string; // The hexadecimal ID of the store to mirror
    urls: string[]; // A list of URLs where the mirror will reside
    amount: number; // The number of mojos to spend to create the mirror
    fee?: string; // Optional: Set the fee for the transaction, in mojos
  }

  export interface AddMissingFilesParams {
    ids?: string[]; // Optional: A list of hexadecimal store IDs to restore
    override?: boolean; // Optional: If true, will overwrite files that already exist
    foldername?: string; // Optional: The name of the folder where the files to be restored are located
  }

  export interface BatchUpdateParams {
    id: string; // The hexadecimal store ID
    changelist: string; // A string representing the changelist
    submit_on_chain: boolean; // Specify whether to submit the update to the blockchain (True), or to store it locally (False). Default: True (See info box for details)
    fee?: string; // Optional: Set the fee for the transaction, in mojos
  }

  export interface CancelOfferParams {
    trade_id: string; // The trade_id of the offer
    secure: boolean; // If true, cancel the offer on the blockchain; if false, cancel locally
    fee?: string; // Optional: Set the fee for the transaction, in mojos (ignored if secure is false)
  }

  export interface CreateDataStoreParams {
    fee?: string; // Optional: Set the fee for the transaction, in mojos
  }

  export interface DeleteMirrorParams {
    coin_id: string; // The coin_id of the mirror to delete
    fee?: string; // Optional: Set the fee for the transaction, in mojos
  }

  export interface GetKeysParams {
    id: string; // The hexadecimal store ID
    root_hash?: string; // Optional: The root hash from which to obtain data
  }

  export interface GetKeysValuesParams {
    id: string; // The hexadecimal store ID
    root_hash?: string; // Optional: The root hash from which to obtain data
  }

  export interface GetKvDiffParams {
    id: string; // The hexadecimal store ID
    hash_1: string; // The first hash to compare
    hash_2: string; // The second hash to compare
  }

  export interface GetMirrorsParams {
    id: string; // The hexadecimal ID of the store for which to list mirrors
  }

  export interface GetRootParams {
    id: string; // The hexadecimal store ID
  }

  export interface GetRootHistoryParams {
    id: string; // The hexadecimal store ID
  }

  export interface GetSyncStatusParams {
    id: string; // The hexadecimal store ID
  }

  export interface GetValueParams {
    id: string; // The hexadecimal store ID
    key: string; // The hexadecimal key
    root_hash?: string; // Optional: The root hash from which to obtain data
  }

  export interface RemoveSubscriptionsParams {
    id: string; // The hexadecimal store ID
    urls: string[]; // A list of URLs from which to unsubscribe
  }

  export interface SubscribeParams {
    id: string; // The hexadecimal store ID
    urls?: string[]; // Optional: A list of URLs where the data store resides
  }

  export interface UnsubscribeParams {
    id: string; // The hexadecimal ID of the store from which to unsubscribe
  }

  export interface WalletLogInParams {
    fingerprint: string; // The fingerprint of the wallet to use
  }

  export interface RemoveSubscriptionsParams {
    id: string; // The hexadecimal store ID
    urls: string[]; // A list of URLs from which to unsubscribe
  }

  export interface Options {
    includeFee?: boolean; // Optional: If true, include the fee in the response
    maxAttempts?: number; // Optional: The maximum number of attempts to make
    waitForWalletAvailability?: boolean; // Optional: If true, wait for the wallet to be available
    allowUnverifiedCert?: boolean; // Optional: If true, allow unverified certificates
  }

  export interface SubmitPendingRootParams {
    id: string; // The hexadecimal store ID
    fee?: string; // Optional: Set the fee for the transaction, in mojos
  }

  export default class DataLayer {
    constructor(config?: Config);
    getConfig(): Config;
    setConfig(config: Config): void;
    addMirror(params: AddMirrorParams, options?: Options);
    addMissingFiles(params: AddMissingFilesParams, options?: Options);
    createDataStore(params?: CreateDataStoreParams, options?: Options);
    deleteMirror(params: DeleteMirrorParams, options?: Options);
    getKeys(params: GetKeysParams, options?: Options);
    getKeysValues(params: GetKeysValuesParams, options?: Options);
    getKvDiff(params: GetKvDiffParams, options?: Options);
    getMirrors(params: GetMirrorsParams, options?: Options);
    getOwnedStores(options?: Options);
    getRoot(params: GetRootParams, options?: Options);
    getRootHistory(params: GetRootHistoryParams, options?: Options);
    getSyncStatus(params: GetSyncStatusParams, options?: Options);
    getSubscriptions(options?: Options);
    getValue(params: GetValueParams, options?: Options);
    plugins(options?: Options);
    removeSubscriptions(params: RemoveSubscriptionsParams, options?: Options);
    subscribe(params: SubscribeParams, options?: Options);
    unsubscribe(params: UnsubscribeParams, options?: Options);
    updateDataStore(params: BatchUpdateParams, options?: Options);
    walletLogin(params: WalletLogInParams, options?: Options);
    submitPendingRoot(params: SubmitPendingRootParams, options?: Options);
  }
}
