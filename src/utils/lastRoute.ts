export const lastRoute = (pathname: string) => {
  const lastSlashIndex = pathname.lastIndexOf("/");
  return pathname.substring(0, lastSlashIndex);
};
