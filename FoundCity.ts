import {
  CityNameRegistry,
  instance as cityNameRegistryInstance,
} from '@civ-clone/core-civilization/CityNameRegistry';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import City from '@civ-clone/core-city/City';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Moved from '@civ-clone/core-unit/Rules/Moved';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export class FoundCity extends Action {
  #cityNameRegistry: CityNameRegistry;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    cityNameRegistry: CityNameRegistry = cityNameRegistryInstance,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this.#cityNameRegistry = cityNameRegistry;
  }

  perform() {
    new City(
      this.unit().player(),
      this.unit().tile(),
      this.#cityNameRegistry.takeCapitalByCivilization(
        this.unit().player().civilization().constructor as typeof Civilization
      ),
      this.ruleRegistry()
    );

    this.unit().destroy();

    this.ruleRegistry().process(Moved, this.unit(), this);
  }
}

export default FoundCity;
