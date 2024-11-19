export function handelImageState(Data_to_send: any, attr: string) {
  if (typeof Data_to_send?.[attr] === "string") {
    delete Data_to_send[attr];
  } else if (Data_to_send?.[attr]) {
    // Do nothing
  } else {
    Data_to_send[attr] = "";
  }
  return Data_to_send;
}
