import { StateKernel } from '../state-kernel';
import { IFramework7State } from '../state/framework7-state';
export declare class Framework7StateKernel extends StateKernel<IFramework7State> {
    constructor(testMode?: boolean);
    protected handleStateChange(): void;
    protected getState(fullState: any): IFramework7State;
}
