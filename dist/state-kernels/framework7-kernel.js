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
var routing_kernel_1 = require("./routing-kernel");
var modal_kernel_1 = require("./modal-kernel");
var Framework7StateKernel = (function (_super) {
    __extends(Framework7StateKernel, _super);
    function Framework7StateKernel(testMode) {
        if (testMode === void 0) { testMode = false; }
        var _this = _super.call(this, testMode) || this;
        _this.children = [
            new routing_kernel_1.RoutingKernel(),
            new modal_kernel_1.ModalKernel()
        ];
        return _this;
    }
    Framework7StateKernel.prototype.handleStateChange = function () { };
    Framework7StateKernel.prototype.getState = function (fullState) {
        return fullState.framework7;
    };
    return Framework7StateKernel;
}(state_kernel_1.StateKernel));
exports.Framework7StateKernel = Framework7StateKernel;

//# sourceMappingURL=framework7-kernel.js.map
