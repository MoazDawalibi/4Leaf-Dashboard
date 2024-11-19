import React from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = ({ url, serial }: any) => {
  const qrValue = `${url}/${serial}`;
  console.log(qrValue);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <QRCode value={qrValue} size={230} type="link" />
    </div>
  );
};

export default QRCodeGenerator;
