"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncFramework7WithStore = function (store, stateKernel) {
    store.subscribe(function () {
        stateKernel.setState(store.getState());
    });
    stateKernel.setActionDispatchHandler(function (action) {
        store.dispatch(action);
    });
};

//# sourceMappingURL=sync.js.map
