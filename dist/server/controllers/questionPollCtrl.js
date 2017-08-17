"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var questionPoll_1 = require("../models/questionPoll");
var base_1 = require("./base");
var AnswerpollCtrl = (function (_super) {
    __extends(AnswerpollCtrl, _super);
    function AnswerpollCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = questionPoll_1.default;
        return _this;
    }
    return AnswerpollCtrl;
}(base_1.default));
exports.default = AnswerpollCtrl;
//# sourceMappingURL=questionPollCtrl.js.map