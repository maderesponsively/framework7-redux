//Modal actions
export const SHOW_ALERT = '@@FRAMEWORK7_SHOW_ALERT';
export const CLOSE_ALERT = '@@FRAMEWORK7_CLOSE_ALERT';

//Routing actions
export const NAVIGATE_TO = '@@FRAMEWORK7_NAVIGATE_TO';
export const GO_BACK = '@@FRAMEWORK7_GO_BACK';
export const HISTORY_UPDATED = '@@FRAMEWORK7_HISTORY_UPDATED';

export interface IFramework7Action extends Redux.Action {    
    args: any;
}

export const createFramework7Action = (framework7ActionType: string, args?: any) => {
    return {
        type: framework7ActionType,        
        args: args
    };
};