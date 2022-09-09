import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Antd } from "components";

type Props = {
  isShowing: boolean;
  setIsShowing: (checked: CheckboxChangeEvent) => void;
  isShowingEndDate: boolean;
  setIsShowingEndDate: (checked: CheckboxChangeEvent) => void;
};

export function VisibleAndEndDateBadgeChecbox({
  isShowing,
  isShowingEndDate,
  setIsShowing,
  setIsShowingEndDate,
}: Props) {
  return (
    <Antd.Input.Group>
      <Antd.Checkbox checked={isShowing} onChange={setIsShowing}>
        노출 여부
      </Antd.Checkbox>
      <Antd.Checkbox checked={isShowingEndDate} onChange={setIsShowingEndDate}>
        종료 일자 뱃지 표시
      </Antd.Checkbox>
    </Antd.Input.Group>
  );
}
