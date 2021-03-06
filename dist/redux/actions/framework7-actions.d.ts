export interface ShowAlertAction {
    type: '@@FRAMEWORK7_SHOW_ALERT';
    title: string;
    text: string;
}
export interface CloseAlertAction {
    type: '@@FRAMEWORK7_CLOSE_ALERT';
}
export interface ShowPreloaderAction {
    type: '@@FRAMEWORK7_SHOW_PRELOADER';
    loadingText: string;
}
export interface ShowConfirmAction {
    type: '@@FRAMEWORK7_SHOW_CONFIRM';
    title: string;
    text: string;
}
export interface CancelConfirmAction {
    type: '@@FRAMEWORK7_CANCEL_CONFIRM';
}
export interface AcceptConfirmAction {
    type: '@@FRAMEWORK7_ACCEPT_CONFIRM';
}
export interface HidePreloaderAction {
    type: '@@FRAMEWORK7_HIDE_PRELOADER';
}
export declare type ModalAction = ShowAlertAction | CloseAlertAction | ShowPreloaderAction | HidePreloaderAction | ShowConfirmAction | AcceptConfirmAction | CancelConfirmAction;
export interface NavigateToAction {
    type: '@@FRAMEWORK7_NAVIGATE_TO';
    path: string;
    replace: boolean;
}
export interface GoBackAction {
    type: '@@FRAMEWORK7_GO_BACK';
}
export interface ClearRoutingAction {
    type: '@@FRAMEWORK7_CLEAR_ROUTING';
    path: string;
}
export declare type RoutingAction = NavigateToAction | GoBackAction | ClearRoutingAction;
