"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAlert = function (text, title) {
    return {
        type: '@@FRAMEWORK7_SHOW_ALERT',
        text: text,
        title: title
    };
};
exports.closeAlert = function () {
    return { type: '@@FRAMEWORK7_CLOSE_ALERT' };
};
exports.showConfirm = function (text, title) {
    return {
        type: '@@FRAMEWORK7_SHOW_CONFIRM',
        text: text,
        title: title
    };
};
exports.cancelConfirm = function () {
    return { type: '@@FRAMEWORK7_CANCEL_CONFIRM' };
};
exports.acceptConfirm = function () {
    return { type: '@@FRAMEWORK7_ACCEPT_CONFIRM' };
};
exports.showPreloader = function (loadingText) {
    return {
        type: '@@FRAMEWORK7_SHOW_PRELOADER',
        loadingText: loadingText
    };
};
exports.hidePreloader = function () {
    return { type: '@@FRAMEWORK7_HIDE_PRELOADER' };
};

//# sourceMappingURL=modal-actions.js.map
