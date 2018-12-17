import { IModalMessageState } from "../../state/modals-state";
export interface IModalMessageButton {
    text: string;
    onClick(): void;
}
export declare class ModalMessageHelper {
    private modal;
    private framework7;
    protected buttons: IModalMessageButton[];
    constructor(framework7: any, buttons: IModalMessageButton[]);
    handleStateChange(state: IModalMessageState): void;
    private show(text, title);
    private close();
}
