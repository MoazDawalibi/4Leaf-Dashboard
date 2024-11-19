import { Ability } from "../types/App";

export function translateAbilities(
  abilities: Ability[],
  t: any,
): { value: number; label: string }[] {
  if (!abilities) {
    return [];
  }

  return abilities.map((ability) => {
    const [before, after] = ability.name.split("::");
    return {
      value: ability.id,
      label: `${t(`practical.${after}`)} ${t(`models.${before}`)} `,
    };
  });
}
