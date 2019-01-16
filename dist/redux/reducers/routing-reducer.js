"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var initialState = {
    history: ['/']
};
exports.historyReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case '@@FRAMEWORK7_NAVIGATE_TO':
            var history_1 = action.replace ? state.slice(0, state.length - 1) : state;
            return history_1.concat([
                action.path
            ]);
        case '@@FRAMEWORK7_GO_BACK':
            return state.slice(0, state.length - 1).slice();
        default:
            return state;
    }
};
exports.routingReducer = redux_1.combineReducers({
    history: exports.historyReducer
});

//# sourceMappingURL=routing-reducer.js.map
