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
var routing_actions_1 = require("../redux/actions/routing-actions");
var history_reconciler_1 = require("./routing/history-reconciler");
var RoutingKernel = (function (_super) {
    __extends(RoutingKernel, _super);
    function RoutingKernel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutingKernel.prototype.getState = function (fullState) {
        return fullState.routing;
    };
    RoutingKernel.prototype.handleStateChange = function (state) {
        this.reconcileHistories(state.history);
    };
    RoutingKernel.prototype.onFramework7Set = function () {
        var _this = this;
        this.framework7.once('pageInit', function () { return _this.initializeHistory(); });
    };
    RoutingKernel.prototype.initializeHistory = function () {
        var _this = this;
        var mainView = this.framework7.views.find(function (view) { return view.main; });
        if (!mainView) {
            throw new Error('Framework7 Redux requires a main view');
        }
        this.router = mainView.router;
        if (this.router.history.length) {
            this.router.history.forEach(function (f7HistoryUrl) {
                _this.dispatchAction(routing_actions_1.navigateTo(f7HistoryUrl));
            });
        }
    };
    RoutingKernel.prototype.reconcileHistories = function (newHistory) {
        var _this = this;
        if (!this.router || !this.framework7)
            return;
        var reconciler = new history_reconciler_1.HistoryReconciler(this.router, this.router.history, newHistory);
        reconciler
            .getOperationsToReconcileHistories()
            .forEach(function (operation) {
            if (operation.forward) {
                _this.router.navigate(operation.url, { reloadCurrent: operation.replace });
            }
            else {
                _this.router.back({ force: true });
            }
        });
    };
    return RoutingKernel;
}(state_kernel_1.StateKernel));
exports.RoutingKernel = RoutingKernel;

//# sourceMappingURL=routing-kernel.js.map
