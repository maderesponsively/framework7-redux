import { IModalState, IModalMessageState } from '../../state/modals-state';
import { StateKernel } from '../../state-kernel';
export declare class ConfirmKernel extends StateKernel<IModalMessageState> {
    private modalMessageHelper;
    onFramework7Set(framework7: any): void;
    protected getState(state: IModalState): IModalMessageState;
    protected handleStateChange(state: IModalMessageState): void;
}
