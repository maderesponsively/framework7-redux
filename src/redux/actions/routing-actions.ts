import {NavigateToAction, GoBackAction, ClearRoutingAction} from './framework7-actions';

export const navigateTo = (path: string, replace?: boolean): NavigateToAction => {
    return {
        type: '@@FRAMEWORK7_NAVIGATE_TO',
        path,
        replace
    };
};

export const goBack = (): GoBackAction => {
    return {
        type: '@@FRAMEWORK7_GO_BACK'
    };    
};

export const clearRouting = (): ClearRoutingAction => {
    return {
        type: '@@FRAMEWORK7_CLEAR_ROUTING'
    };    
};