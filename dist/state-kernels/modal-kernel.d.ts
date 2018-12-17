import { StateKernel } from '../state-kernel';
import { IModalState } from '../state/modals-state';
import { IFramework7State } from '../state/framework7-state';
export declare class ModalKernel extends StateKernel<IModalState> {
    constructor();
    protected getState(fullState: IFramework7State): IModalState;
    protected handleStateChange(state: IModalState): void;
}
