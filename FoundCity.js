"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _cityNameRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundCity = void 0;
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const City_1 = require("@civ-clone/core-city/City");
class FoundCity extends Action_1.default {
    constructor(from, to, unit, cityNameRegistry = CityNameRegistry_1.instance, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        _cityNameRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _cityNameRegistry, cityNameRegistry);
    }
    perform() {
        new City_1.default(this.unit().player(), this.unit().tile(), __classPrivateFieldGet(this, _cityNameRegistry).takeCapitalByCivilization(this.unit().player().civilization().constructor));
        this.unit().destroy();
        this.ruleRegistry().process(Moved_1.Moved, this.unit(), this);
    }
}
exports.FoundCity = FoundCity;
_cityNameRegistry = new WeakMap();
exports.default = FoundCity;
//# sourceMappingURL=FoundCity.js.map