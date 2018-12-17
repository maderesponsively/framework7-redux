"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HistoryReconciler = (function () {
    function HistoryReconciler(router, framework7History, newHistory) {
        this.router = router;
        this.framework7History = framework7History.slice();
        this.newHistory = newHistory.slice();
    }
    HistoryReconciler.prototype.getOperationsToReconcileHistories = function () {
        this.operations = [];
        this.fastForwardToFirstNonMatchingPage();
        this.rewindFramework7History();
        if (this.currentF7HistoryUrl && this.currentNewHistoryUrl) {
            this.replaceLastFramework7UrlWithNewUrl();
        }
        if (this.newHistory.length) {
            this.addRemainingNewUrlsToFramework7History();
        }
        return this.operations;
    };
    Object.defineProperty(HistoryReconciler.prototype, "currentF7HistoryUrl", {
        get: function () {
            return this.framework7History[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryReconciler.prototype, "currentNewHistoryUrl", {
        get: function () {
            return this.newHistory[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryReconciler.prototype, "currentF7HistoryPagePath", {
        get: function () {
            return this.currentF7HistoryUrl && this.router.findMatchingRoute(this.currentF7HistoryUrl).url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HistoryReconciler.prototype, "currentNewHistoryPagePath", {
        get: function () {
            return this.currentNewHistoryUrl && this.router.findMatchingRoute(this.currentNewHistoryUrl).url;
        },
        enumerable: true,
        configurable: true
    });
    HistoryReconciler.prototype.fastForwardToFirstNonMatchingPage = function () {
        while (this.currentF7HistoryUrl && this.currentNewHistoryUrl && this.currentF7HistoryPagePath === this.currentNewHistoryPagePath) {
            if ((this.currentF7HistoryUrl !== this.currentNewHistoryUrl) ||
                (this.newHistory.length === 1 && this.framework7History.length) === 1) {
                this.operations.push({
                    forward: true,
                    url: this.currentNewHistoryUrl,
                    replace: false
                });
            }
            var lastNewHistoryUrl = this.newHistory.shift();
            this.framework7History.shift();
            if (this.currentF7HistoryUrl && !this.currentNewHistoryUrl) {
                this.operations.push({
                    url: lastNewHistoryUrl,
                    forward: false,
                    replace: false
                });
            }
        }
    };
    HistoryReconciler.prototype.rewindFramework7History = function () {
        while (this.framework7History.length > 1) {
            this.operations.push({
                forward: false,
                replace: false,
                url: this.framework7History.pop()
            });
        }
    };
    HistoryReconciler.prototype.framework7HasHistoryAtCurrentPosition = function () {
        return this.framework7History.length >= 0;
    };
    HistoryReconciler.prototype.replaceLastFramework7UrlWithNewUrl = function () {
        this.operations.push({
            forward: true,
            url: this.currentNewHistoryUrl,
            replace: true
        });
        this.newHistory.shift();
        this.framework7History.shift();
    };
    HistoryReconciler.prototype.addRemainingNewUrlsToFramework7History = function () {
        while (this.newHistory.length) {
            this.operations.push({
                forward: true,
                url: this.newHistory.pop(),
                replace: false
            });
        }
    };
    return HistoryReconciler;
}());
exports.HistoryReconciler = HistoryReconciler;

//# sourceMappingURL=history-reconciler.js.map
