"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var initialModalMessageState = {
    modalMessageType: null,
    title: null,
    text: null
};
var initialPreloaderState = {
    loadingText: null,
    visible: false
};
exports.modalMessageReducer = function (state, action) {
    if (state === void 0) { state = initialModalMessageState; }
    switch (action.type) {
        case '@@FRAMEWORK7_SHOW_CONFIRM':
            return {
                modalMessageType: 'confirm',
                title: action.title,
                text: action.text
            };
        case '@@FRAMEWORK7_SHOW_ALERT':
            return {
                modalMessageType: 'alert',
                title: action.title,
                text: action.text
            };
        case '@@FRAMEWORK7_CANCEL_CONFIRM':
        case '@@FRAMEWORK7_ACCEPT_CONFIRM':
        case '@@FRAMEWORK7_CLOSE_ALERT':
            return {
                modalMessageType: null,
                title: null,
                text: null
            };
        default:
            return state;
    }
};
exports.preloaderReducer = function (state, action) {
    if (state === void 0) { state = initialPreloaderState; }
    switch (action.type) {
        case '@@FRAMEWORK7_SHOW_PRELOADER':
            return {
                loadingText: action.loadingText,
                visible: true
            };
        case '@@FRAMEWORK7_HIDE_PRELOADER':
            return {
                loadingText: null,
                visible: false
            };
        default:
            return state;
    }
};
exports.modalsReducer = redux_1.combineReducers({
    modalMessage: exports.modalMessageReducer,
    preloader: exports.preloaderReducer
});

//# sourceMappingURL=modal-reducer.js.map
