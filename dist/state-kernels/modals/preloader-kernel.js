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
var state_kernel_1 = require("../../state-kernel");
var PreloaderKernel = (function (_super) {
    __extends(PreloaderKernel, _super);
    function PreloaderKernel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreloaderKernel.prototype.getState = function (fullState) {
        return fullState.preloader;
    };
    PreloaderKernel.prototype.handleStateChange = function (state) {
        if (state.visible) {
            this.showPreloader(state.loadingText);
        }
        else {
            this.hidePreloader();
        }
    };
    PreloaderKernel.prototype.showPreloader = function (title) {
        if (!this.preloaderModal) {
            this.preloaderModal = this.framework7.preloader.show(title);
        }
        else {
            this.hidePreloader();
            this.showPreloader(title);
        }
    };
    PreloaderKernel.prototype.hidePreloader = function () {
        if (this.preloaderModal) {
            this.framework7.preloader.hide();
            var tempPreloaderModal_1 = this.preloaderModal;
            //Sometimes, a timing issue causes the preloader to not get cleaned up, so we're making sure it always does.
            setTimeout(function () {
                if (tempPreloaderModal_1) {
                    tempPreloaderModal_1.remove();
                }
            }, 100);
            this.preloaderModal = null;
        }
    };
    return PreloaderKernel;
}(state_kernel_1.StateKernel));
exports.PreloaderKernel = PreloaderKernel;

//# sourceMappingURL=preloader-kernel.js.map
