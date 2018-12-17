import { StateKernel } from '../../state-kernel';
import { IPreloaderState, IModalState } from '../../state/modals-state';
export declare class PreloaderKernel extends StateKernel<IPreloaderState> {
    private preloaderModal;
    protected getState(fullState: IModalState): IPreloaderState;
    protected handleStateChange(state: IPreloaderState): void;
    private showPreloader(title);
    private hidePreloader();
}
