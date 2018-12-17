"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var modal_actions_1 = require("../../redux/actions/modal-actions");
var modal_message_helper_1 = require("./modal-message-helper");
var state_kernel_1 = require("../../state-kernel");
var ConfirmKernel = (function (_super) {
    __extends(ConfirmKernel, _super);
    function ConfirmKernel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmKernel.prototype.onFramework7Set = function (framework7) {
        var _this = this;
        this.modalMessageHelper = new modal_message_helper_1.ModalMessageHelper(framework7, [{
                text: 'Ok',
                onClick: function () { return _this.dispatchAction(modal_actions_1.acceptConfirm()); }
            }, {
                text: 'Cancel',
                onClick: function () { return _this.dispatchAction(modal_actions_1.cancelConfirm()); }
            }]);
    };
    ConfirmKernel.prototype.getState = function (state) {
        return state.modalMessage;
    };
    ConfirmKernel.prototype.handleStateChange = function (state) {
        if (state.modalMessageType === 'confirm') {
            this.modalMessageHelper.handleStateChange(state);
        }
    };
    return ConfirmKernel;
}(state_kernel_1.StateKernel));
exports.ConfirmKernel = ConfirmKernel;

//# sourceMappingURL=confirm-kernel.js.map
