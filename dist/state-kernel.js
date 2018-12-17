"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateKernel = (function () {
    function StateKernel(testMode) {
        if (testMode === void 0) { testMode = false; }
        this.actionListeners = [];
        this.children = [];
        this.testMode = testMode;
    }
    StateKernel.prototype.setState = function (newFullState) {
        if (this.testMode)
            return;
        var myNewState = this.getState(newFullState);
        if (myNewState != this.previousState) {
            this.handleStateChange(myNewState);
        }
        this.previousState = myNewState;
        this.children.forEach(function (child) {
            child.setState(myNewState);
        });
    };
    StateKernel.prototype.setTestMode = function (testMode) {
        this.testMode = testMode;
    };
    StateKernel.prototype.setFramework7 = function (framework7) {
        this.framework7 = framework7;
        this.children.forEach(function (child) { return child.setFramework7(framework7); });
        if (this.onFramework7Set)
            this.onFramework7Set(framework7);
    };
    StateKernel.prototype.setActionDispatchHandler = function (actionDispatchHandler) {
        var _this = this;
        this.actionDispatchHandler = actionDispatchHandler;
        this.children.forEach(function (child) { return child.setActionDispatchHandler(_this.dispatchAction.bind(_this)); });
    };
    StateKernel.prototype.listenForAction = function (actionType, callback, single) {
        if (single === void 0) { single = false; }
        this.actionListeners.push({
            actionType: actionType,
            callback: callback,
            single: single
        });
    };
    StateKernel.prototype.getActionPromise = function (actionType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.listenForAction(actionType, resolve, true);
        });
    };
    StateKernel.prototype.dispatchAction = function (action) {
        this.actionDispatchHandler(action);
        this.actionListeners.forEach(function (listener) {
            if (listener.actionType === action.type) {
                listener.callback(action);
            }
        });
        this.actionListeners = this.actionListeners.filter(function (listener) { return listener.actionType !== action.type || !listener.single; });
    };
    return StateKernel;
}());
exports.StateKernel = StateKernel;

//# sourceMappingURL=state-kernel.js.map
