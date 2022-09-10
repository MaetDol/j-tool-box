import { Antd } from "components";
import { ChangeEventHandler } from "react";

type Props = {
  orderNumber: number;
  setOrderNumber: (value: number) => void;
  packageId: string;
  setPackageId: ChangeEventHandler<HTMLInputElement>;
};

export function OrderNumberAndPackageIdInput({
  orderNumber,
  packageId,
  setOrderNumber,
  setPackageId,
}: Props) {
  return (
    <Antd.Input.Group>
      노출 순서
      <Antd.InputNumber
        style={{ margin: "0 16px 0 8px" }}
        min={1}
        value={orderNumber}
        onChange={setOrderNumber}
      />
      패키지 ID
      <Antd.Input
        placeholder="250"
        style={{
          width: "120px",
          float: "none",
          display: "inline-block",
          margin: "0 16px 0 8px",
        }}
        value={packageId}
        onChange={setPackageId}
      />
    </Antd.Input.Group>
  );
}
