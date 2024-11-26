import { StaticInfo } from './../types/StaticInfo';
import { Customers } from './../types/Customers';
import { ShippingFees } from './../types/ShippingFees';
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "../enums/abilities";
import { hasAbility } from "./hasAbility";

// shipping fees
export const canAddShippingFees = hasAbility(
  ABILITIES_ENUM.ShippingFees,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditShippingFees = hasAbility(
  ABILITIES_ENUM.ShippingFees,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteShippingFees = hasAbility(
  ABILITIES_ENUM.ShippingFees,
  ABILITIES_VALUES_ENUM.DELETE,
);

// customer
export const canAddCustomers = hasAbility(
  ABILITIES_ENUM.Customers,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditCustomers = hasAbility(
  ABILITIES_ENUM.Customers,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCustomers = hasAbility(
  ABILITIES_ENUM.Customers,
  ABILITIES_VALUES_ENUM.DELETE,
);

// category
export const canAddCategory = hasAbility(
  ABILITIES_ENUM.Category,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditCategory = hasAbility(
  ABILITIES_ENUM.Category,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCategory = hasAbility(
  ABILITIES_ENUM.Category,
  ABILITIES_VALUES_ENUM.DELETE,
);

// user
export const canAddUsers = hasAbility(
  ABILITIES_ENUM.User,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditUsers = hasAbility(
  ABILITIES_ENUM.User,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteUsers = hasAbility(
  ABILITIES_ENUM.User,
  ABILITIES_VALUES_ENUM.DELETE,
);


// static info
export const canAddStaticInfo = hasAbility(
  ABILITIES_ENUM.StaticInfo,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditStaticInfo = hasAbility(
  ABILITIES_ENUM.StaticInfo,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteStaticInfo = hasAbility(
  ABILITIES_ENUM.StaticInfo,
  ABILITIES_VALUES_ENUM.DELETE,
);

// shipment
export const canAddShipment = hasAbility(
  ABILITIES_ENUM.Shipment,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditShipment = hasAbility(
  ABILITIES_ENUM.Shipment,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteShipment = hasAbility(
  ABILITIES_ENUM.Shipment,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowShipment = hasAbility(
  ABILITIES_ENUM.Shipment,
  ABILITIES_VALUES_ENUM.SHOW,
);