import { StateKernel } from '../state-kernel';
import { IRoutingState } from '../state/routing-state';
import { IFramework7State } from '../state/framework7-state';
export declare class RoutingKernel extends StateKernel<IRoutingState> {
    private router;
    protected getState(fullState: IFramework7State): IRoutingState;
    protected handleStateChange(state: IRoutingState): void;
    onFramework7Set(): void;
    private initializeHistory();
    private reconcileHistories(newHistory);
}
