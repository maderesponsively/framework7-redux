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
var state_kernel_1 = require("../../state-kernel");
var modal_message_helper_1 = require("./modal-message-helper");
var AlertKernel = (function (_super) {
    __extends(AlertKernel, _super);
    function AlertKernel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertKernel.prototype.onFramework7Set = function (framework7) {
        var _this = this;
        this.modalMessageHelper = new modal_message_helper_1.ModalMessageHelper(framework7, [{
                text: 'Ok',
                onClick: function () { return _this.dispatchAction(modal_actions_1.closeAlert()); }
            }]);
    };
    AlertKernel.prototype.getState = function (state) {
        return state.modalMessage;
    };
    AlertKernel.prototype.handleStateChange = function (state) {
        if (state.modalMessageType === 'alert') {
            this.modalMessageHelper.handleStateChange(state);
        }
    };
    return AlertKernel;
}(state_kernel_1.StateKernel));
exports.AlertKernel = AlertKernel;

//# sourceMappingURL=alert-kernel.js.map
