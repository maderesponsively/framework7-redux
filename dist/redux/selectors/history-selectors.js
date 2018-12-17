"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkState = function (state) {
    if (!state.framework7 || !state.framework7.routing || !state.framework7.routing.history) {
        throw new Error('State must contain a property called "framework7" and must be controlled by the framework7-redux reducer!');
    }
};
exports.getCurrentRoute = function (state) {
    checkState(state);
    return state.framework7.routing.history[state.framework7.routing.history.length - 1];
};
exports.getPreviousRoute = function (state) {
    checkState(state);
    return state.framework7.routing.history[state.framework7.routing.history.length - 2];
};

//# sourceMappingURL=history-selectors.js.map
