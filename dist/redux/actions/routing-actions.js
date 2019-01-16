"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateTo = function (path, replace) {
    return {
        type: '@@FRAMEWORK7_NAVIGATE_TO',
        path: path,
        replace: replace
    };
};
exports.goBack = function () {
    return {
        type: '@@FRAMEWORK7_GO_BACK'
    };
};
exports.clearRouting = function (path) {
    return {
        type: '@@FRAMEWORK7_CLEAR_ROUTING',
        path: path
    };
};

//# sourceMappingURL=routing-actions.js.map
