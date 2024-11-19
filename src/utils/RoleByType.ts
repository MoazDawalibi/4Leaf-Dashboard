import { USER_KEY } from "../config/AppKey";
import { UserTypeEnum } from "../enums/UserType";
import { getLocalStorage } from "./LocalStorage";

export const RoleByType = (item: { type?: string }): boolean => {
  const type = item?.type ?? UserTypeEnum.ADMIN;
  const LocalType = getLocalStorage(USER_KEY)?.type ?? undefined;
  const isAdmin = LocalType === UserTypeEnum.ADMIN;
  const isReSeller = LocalType === UserTypeEnum.RE_SELLER;
  const isReSellerRoute = type === UserTypeEnum.RE_SELLER;

  if (!LocalType) {
    return false;
  }
  if (type === UserTypeEnum.PASS) {
    return true;
  }

  if (isAdmin && isReSellerRoute) {
    return false;
  }

  if (isReSeller && !isReSellerRoute) {
    return false;
  }

  return true;
};
