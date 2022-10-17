"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FoundCity_cityNameRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundCity = void 0;
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const City_1 = require("@civ-clone/core-city/City");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
class FoundCity extends Action_1.default {
    constructor(from, to, unit, cityNameRegistry = CityNameRegistry_1.instance, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        _FoundCity_cityNameRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _FoundCity_cityNameRegistry, cityNameRegistry, "f");
    }
    perform() {
        new City_1.default(this.unit().player(), this.unit().tile(), __classPrivateFieldGet(this, _FoundCity_cityNameRegistry, "f").takeCapitalByCivilization(this.unit().player().civilization().constructor), this.ruleRegistry());
        this.unit().destroy();
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
    }
}
exports.FoundCity = FoundCity;
_FoundCity_cityNameRegistry = new WeakMap();
exports.default = FoundCity;
//# sourceMappingURL=FoundCity.js.map