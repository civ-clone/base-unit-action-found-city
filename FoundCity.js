"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundCity = void 0;
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
const Action_1 = require("@civ-clone/core-unit/Action");
const City_1 = require("@civ-clone/core-city/City");
class FoundCity extends Action_1.default {
    perform() {
        // TODO: get City name... Rules/Registry?
        // (this.unit().player().civilization as { cityNames: string[] }).cityNames.shift(),
        new City_1.default(this.unit().player(), this.unit().tile(), 'City');
        this.unit().destroy();
        this.ruleRegistry().process(Moved_1.Moved, this.unit(), this);
    }
}
exports.FoundCity = FoundCity;
exports.default = FoundCity;
//# sourceMappingURL=FoundCity.js.map