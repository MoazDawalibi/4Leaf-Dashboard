export const mergePermissionsWithAbilities = (
  newShapeArray: Record<any, any>[],
  Ability: Record<any, boolean | "disabled" | "string">[],
) => {
  const newShapeMap = new Map(newShapeArray.map((item) => [item.name, item]));
  console.log(newShapeMap, "newShapeMap");

  return Ability.map((abilityItem) => {
    const correspondingNewShape = newShapeMap.get(abilityItem.name);
    console.log(correspondingNewShape);

    let ALL = false;
    if (correspondingNewShape) {
      if (
        correspondingNewShape["index"] &&
        correspondingNewShape["show"] &&
        correspondingNewShape["store"] &&
        correspondingNewShape["update"] &&
        correspondingNewShape["delete"]
      ) {
        ALL = true;
      }
      console.log(correspondingNewShape);

      return {
        ...abilityItem,
        delete:
          typeof correspondingNewShape.delete === "boolean"
            ? correspondingNewShape.delete
            : "disabled",
        index:
          typeof correspondingNewShape.index === "boolean"
            ? correspondingNewShape.index
            : "disabled",
        show:
          typeof correspondingNewShape.show === "boolean"
            ? correspondingNewShape.show
            : "disabled",
        store:
          typeof correspondingNewShape.store === "boolean"
            ? correspondingNewShape.store
            : "disabled",
        update:
          typeof correspondingNewShape.update === "boolean"
            ? correspondingNewShape.update
            : "disabled",
        ALL: ALL,
      };
    }

    // Return original ability item if no match found
    return abilityItem;
  });
};
