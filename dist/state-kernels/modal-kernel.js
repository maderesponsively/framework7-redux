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
var state_kernel_1 = require("../state-kernel");
var alert_kernel_1 = require("./modals/alert-kernel");
var preloader_kernel_1 = require("./modals/preloader-kernel");
var confirm_kernel_1 = require("./modals/confirm-kernel");
var ModalKernel = (function (_super) {
    __extends(ModalKernel, _super);
    function ModalKernel() {
        var _this = _super.call(this) || this;
        _this.children = [
            new alert_kernel_1.AlertKernel(),
            new confirm_kernel_1.ConfirmKernel(),
            new preloader_kernel_1.PreloaderKernel()
        ];
        return _this;
    }
    ModalKernel.prototype.getState = function (fullState) {
        return fullState.modals;
    };
    ModalKernel.prototype.handleStateChange = function (state) { };
    return ModalKernel;
}(state_kernel_1.StateKernel));
exports.ModalKernel = ModalKernel;

//# sourceMappingURL=modal-kernel.js.map
