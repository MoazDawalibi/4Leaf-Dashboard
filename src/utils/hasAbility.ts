import { ABILITIES_KEY } from "../config/AppKey";
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "../enums/abilities";

export function hasAbility(
  category: ABILITIES_ENUM,
  value: ABILITIES_VALUES_ENUM,
): boolean {
  const abilitiesString = localStorage?.getItem(ABILITIES_KEY);

  if (!abilitiesString) {
    return false;
  }
  if (category === ABILITIES_ENUM?.PASS) {
    return true;
  }

  // const abilities: string[] = JSON.parse(abilitiesString);
  // const abilityString = `${category}::${value}`;

  // return abilities.includes(abilityString);

  return true;
}
