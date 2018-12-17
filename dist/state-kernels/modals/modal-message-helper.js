"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModalMessageHelper = (function () {
    function ModalMessageHelper(framework7, buttons) {
        this.framework7 = framework7;
        this.buttons = buttons;
    }
    ModalMessageHelper.prototype.handleStateChange = function (state) {
        if (state.text || state.title) {
            this.show(state.text, state.title);
        }
        else {
            this.close();
        }
    };
    ModalMessageHelper.prototype.show = function (text, title) {
        if (!this.modal) {
            this.modal = this.framework7.dialog.create({
                text: text,
                title: title,
                buttons: this.buttons
            })
                .open();
        }
        else {
            this.close();
            this.show(text, title);
        }
    };
    ModalMessageHelper.prototype.close = function () {
        if (this.modal) {
            this.framework7.dialog.close();
            this.modal = null;
        }
    };
    return ModalMessageHelper;
}());
exports.ModalMessageHelper = ModalMessageHelper;

//# sourceMappingURL=modal-message-helper.js.map
