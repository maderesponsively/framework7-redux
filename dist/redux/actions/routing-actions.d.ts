import { NavigateToAction, GoBackAction, ClearRoutingAction } from './framework7-actions';
export declare const navigateTo: (path: string, replace?: boolean) => NavigateToAction;
export declare const goBack: () => GoBackAction;
export declare const clearRouting: (path: string) => ClearRoutingAction;
