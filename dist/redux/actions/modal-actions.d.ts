import { ShowAlertAction, CloseAlertAction, ShowPreloaderAction, HidePreloaderAction, CancelConfirmAction, AcceptConfirmAction, ShowConfirmAction } from './framework7-actions';
export declare const showAlert: (text: string, title?: string) => ShowAlertAction;
export declare const closeAlert: () => CloseAlertAction;
export declare const showConfirm: (text: string, title?: string) => ShowConfirmAction;
export declare const cancelConfirm: () => CancelConfirmAction;
export declare const acceptConfirm: () => AcceptConfirmAction;
export declare const showPreloader: (loadingText?: string) => ShowPreloaderAction;
export declare const hidePreloader: () => HidePreloaderAction;
