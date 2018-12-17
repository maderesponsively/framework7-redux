"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.framework7ReduxPlugin = {
    name: 'framework7-redux',
    on: {
        init: function () {
            var app = this;
            // Make sure links in Framework7 don't change the URL
            app.on('click', function (e) {
                var clicked = app.$(e.target);
                var clickedLink = clicked.closest('a');
                var isLink = clickedLink.length > 0;
                if (isLink) {
                    e.preventDefault();
                }
            });
            if (app.params.stateKernel) {
                app.params.stateKernel.setFramework7(app);
            }
            else {
                throw new Error('Framework7 Redux plug-in requires a state kernel');
            }
        }
    },
    install: function () {
        // Nothing to do here
    },
    create: function (instance) {
        return function () { };
    }
};

//# sourceMappingURL=framework7-redux-plugin.js.map
