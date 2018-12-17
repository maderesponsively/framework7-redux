"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var routing_reducer_1 = require("./routing-reducer");
var modal_reducer_1 = require("./modal-reducer");
exports.framework7Reducer = redux_1.combineReducers({
    routing: routing_reducer_1.routingReducer,
    modals: modal_reducer_1.modalsReducer
});

//# sourceMappingURL=framework7-reducer.js.map
