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

//# sourceMappingURL=routing-actions.js.map
