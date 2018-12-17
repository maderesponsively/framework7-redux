import { StateKernel } from '../../state-kernel';
import { IModalMessageState } from '../../state/modals-state';
import { IModalState } from '../../state/modals-state';
export declare class AlertKernel extends StateKernel<IModalMessageState> {
    private modalMessageHelper;
    onFramework7Set(framework7: any): void;
    protected getState(state: IModalState): IModalMessageState;
    protected handleStateChange(state: IModalMessageState): void;
}
