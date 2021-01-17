import { Moved, IMovedRegistry } from '@civ-clone/core-unit/Rules/Moved';
import Action from '@civ-clone/core-unit/Action';
import City from '@civ-clone/core-city/City';

export class FoundCity extends Action {
  perform() {
    // TODO: get City name... Rules/Registry?
    // (this.unit().player().civilization as { cityNames: string[] }).cityNames.shift(),

    new City(this.unit().player(), this.unit().tile(), 'City');

    this.unit().destroy();

    (this.ruleRegistry() as IMovedRegistry).process(Moved, this.unit(), this);
  }
}

export default FoundCity;
