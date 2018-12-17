export interface StateKernel<TState> {
    onFramework7Set?(framework7?: any): void;
    onRouterSet?(router?: any): void;
}
export declare abstract class StateKernel<TState> {
    private previousState;
    private testMode;
    private actionDispatchHandler;
    private actionListeners;
    protected children: StateKernel<any>[];
    protected framework7: any;
    constructor(testMode?: boolean);
    setState(newFullState: any): void;
    setTestMode(testMode: boolean): void;
    setFramework7(framework7: any): void;
    setActionDispatchHandler(actionDispatchHandler: (action: any) => void): void;
    listenForAction(actionType: string, callback: (action: any) => void, single?: boolean): void;
    getActionPromise(actionType: string): Promise<{}>;
    dispatchAction(action: any): void;
    protected abstract handleStateChange(newState: TState): void;
    protected abstract getState(state: any): TState;
}
