import { CityNameRegistry } from '@civ-clone/core-civilization/CityNameRegistry';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { WorkedTileRegistry } from '@civ-clone/core-city/WorkedTileRegistry';
import Action from '@civ-clone/core-unit/Action';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export declare class FoundCity extends Action {
  #private;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    cityNameRegistry?: CityNameRegistry,
    ruleRegistry?: RuleRegistry,
    workedTileRegistry?: WorkedTileRegistry
  );
  perform(): void;
}
export default FoundCity;
