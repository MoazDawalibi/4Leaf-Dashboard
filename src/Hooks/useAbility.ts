import { useState, useEffect } from "react";
import { ABILITIES_KEY } from "../config/AppKey";
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "../enums/abilities";

// Define the return type of the hook
type UseAbilityHook = {
  hasAbility: (
    category: ABILITIES_ENUM,
    value: ABILITIES_VALUES_ENUM,
  ) => boolean;
};

// Define the hook function
export function useAbility(): UseAbilityHook {
  // State to store abilities
  const [abilities, setAbilities] = useState<string[]>([]);

  // Fetch abilities from local storage on component mount
  useEffect(() => {
    const abilitiesString = localStorage.getItem(ABILITIES_KEY);
    if (abilitiesString) {
      const parsedAbilities = JSON.parse(abilitiesString);
      setAbilities(parsedAbilities);
    }
  }, []);

  // Function to check if an ability is present
  function hasAbility(
    category: ABILITIES_ENUM,
    value: ABILITIES_VALUES_ENUM,
  ): boolean {
    if (category === ABILITIES_ENUM.PASS) {
      return true;
    }

    const abilityString = `${category}::${value}`;
    return abilities.includes(abilityString);
  }

  // Return the function as part of the hook
  return { hasAbility };
}
