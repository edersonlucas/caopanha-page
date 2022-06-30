import {QRCodeCanvas} from 'qrcode.react';

interface QrCodeGenProps {
  link: string;
  icon: string | any;
}

function QrCodeGen(props: QrCodeGenProps) {
  return (
    <QRCodeCanvas
      value={props.link}
      size={300}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: props.icon,
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  )
}

export default QrCodeGen;