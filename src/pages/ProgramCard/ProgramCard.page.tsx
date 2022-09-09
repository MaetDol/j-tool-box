import { Antd, RequiredAsterisk } from "components";
import {
  useCheckboxState,
  useRadioState,
  useSelectState,
  useStringInputState,
} from "hooks";
import { useState } from "react";
import {
  ProgramCardConceptType,
  ProgramCardLinkType,
  ProgramCardLocationType,
  ProgramCardSubjectType,
  ProgramCardTarget,
  ProgramCardType,
  ProgramCardUIType,
} from "./ProgramCard.model";

export default function ProgramCard() {
  const [title, setTitle] = useStringInputState("");
  const [subtitle, setSubtitle] = useStringInputState("");
  const [cardType, setCardType] = useRadioState<ProgramCardType>(
    ProgramCardType.프로그램
  );
  const [uiType, setUiType] = useSelectState<ProgramCardUIType>(
    ProgramCardUIType.Wide
  );
  const [thumbnail, setThumbnail] = useStringInputState("");
  const [isShowing, setIsShowing] = useCheckboxState(true);
  const [isShowingEndDate, setIsShowingEndDate] = useCheckboxState(false);

  const [recommendAgeSlider, setRecommendAgeSlider] = useState<
    [number, number]
  >([4, 13]);

  const [conceptType, setConceptType] = useRadioState<ProgramCardConceptType>(
    ProgramCardConceptType.일반
  );

  const [openDuration, setOpenDuration] = useState<[string, string] | []>([]);
  const [shareThumbnail, setShareThumbnail] = useStringInputState("");
  const [orderNumber, setOrderNumber] = useState(1);
  const [packageId, setPackageId] = useStringInputState("");
  const [linkType, setLinkType] = useRadioState<ProgramCardLinkType>(
    ProgramCardLinkType.없음
  );
  const [subjects, setSubjects] = useState<ProgramCardSubjectType[]>([]);
  const [linkUrl, setLinkUrl] = useStringInputState("");
  const [location, setLocation] = useRadioState<ProgramCardLocationType>(
    ProgramCardLocationType.가정방문
  );

  const [hasKit, setHasKit] = useCheckboxState(false);
  const [target, setTarget] = useState<ProgramCardTarget>(
    ProgramCardTarget.부모님
  );

  return (
    <div>
      <Antd.Space direction="vertical" size="large">
        <Antd.Input.Group>
          카드 타이틀
          <RequiredAsterisk />
          <Antd.Input.TextArea
            value={title}
            onChange={setTitle}
            placeholder={`카드 타이틀을
입력해주세용`}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          카드 서브타이틀
          <RequiredAsterisk />
          <Antd.Input
            value={subtitle}
            onChange={setSubtitle}
            placeholder="서브 타이틀을 입력해주세요"
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          <Antd.Radio.Group
            buttonStyle="solid"
            optionType="button"
            value={cardType}
            onChange={setCardType}
            style={{ marginRight: "24px" }}
            options={[
              { label: "배너", value: ProgramCardType.배너 },
              { label: "기획전", value: ProgramCardType.기획전 },
              { label: "프로그램", value: ProgramCardType.프로그램 },
            ]}
          />
          카드 UI 유형
          <Antd.Select
            style={{ width: "240px", marginLeft: "8px" }}
            value={uiType}
            onChange={setUiType}
          >
            <Antd.Select.Option value={ProgramCardUIType.Wide}>
              Wide
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardUIType.CircleMask}>
              Circle Mask
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardUIType.전문쌤검정}>
              전문쌤 검정
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardUIType.전문쌤하양}>
              전문쌤 하양
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardUIType.배너기본}>
              배너 기본
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardUIType.기획전기본}>
              기획전 기본
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardUIType.기획전기본2}>
              기획전 기본2
            </Antd.Select.Option>
          </Antd.Select>
        </Antd.Input.Group>
        <Antd.Input.Group>
          썸네일 주소
          <RequiredAsterisk />
          <Antd.Input
            value={thumbnail}
            onChange={setThumbnail}
            placeholder="https://storage.googleapis.com/event_3_thumb.webp"
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          <Antd.Checkbox checked={isShowing} onChange={setIsShowing}>
            노출 여부
          </Antd.Checkbox>
          <Antd.Checkbox
            checked={isShowingEndDate}
            onChange={setIsShowingEndDate}
          >
            종료 일자 뱃지 표시
          </Antd.Checkbox>
        </Antd.Input.Group>
        <Antd.Input.Group>
          추천 연령 <RequiredAsterisk />
          <div style={{ display: "flex" }}>
            <Antd.InputNumber
              min={2}
              max={14}
              value={recommendAgeSlider[0]}
              onChange={(num) =>
                setRecommendAgeSlider((prev) => [num, prev[1]])
              }
            />
            <Antd.Slider
              style={{
                width: "100%",
                margin: "0 16px",
                alignSelf: "center",
              }}
              range
              min={2}
              max={14}
              value={recommendAgeSlider}
              onChange={setRecommendAgeSlider}
            />
            <Antd.InputNumber
              min={2}
              max={14}
              value={recommendAgeSlider[1]}
              onChange={(num) =>
                setRecommendAgeSlider((prev) => [prev[0], num])
              }
            />
            <Antd.Button style={{ marginLeft: "8px" }} type="primary">
              적용하기
            </Antd.Button>
          </div>
        </Antd.Input.Group>
        <Antd.Input.Group style={{ marginBottom: "16px" }}>
          프로그램 컨셉
          <Antd.Radio.Group
            style={{ marginLeft: "16px" }}
            optionType="button"
            buttonStyle="solid"
            value={conceptType}
            onChange={setConceptType}
            options={[
              { label: "전문가", value: ProgramCardConceptType.전문가 },
              { label: "일반", value: ProgramCardConceptType.일반 },
            ]}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          노출 기간 <RequiredAsterisk />
          <Antd.DatePicker.RangePicker
            showTime
            onChange={(_, formatedDates) => setOpenDuration(formatedDates)}
            style={{ marginLeft: "8px" }}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          공유시 노출될 썸네일
          <Antd.Input
            placeholder="https://storage.googleapis.com/share_event_3.webp"
            value={shareThumbnail}
            onChange={setShareThumbnail}
          />
        </Antd.Input.Group>
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
        <Antd.Input.Group>
          과목 유형
          <Antd.Select
            mode="multiple"
            style={{ width: "100%" }}
            value={subjects}
            onChange={(selection) => setSubjects(selection)}
          >
            <Antd.Select.Option value={ProgramCardSubjectType.외국어}>
              외국어
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardSubjectType.수학과학}>
              수학/과학
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardSubjectType.한글국어}>
              한글/국어
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardSubjectType.예체능}>
              예체능
            </Antd.Select.Option>
          </Antd.Select>
        </Antd.Input.Group>
        <Antd.Input.Group>
          연결 url
          <Antd.Radio.Group
            style={{ margin: "8px 8px" }}
            buttonStyle="solid"
            optionType="button"
            options={[
              { label: "없음", value: ProgramCardLinkType.없음 },
              { label: "내부", value: ProgramCardLinkType.내부 },
              { label: "외부", value: ProgramCardLinkType.외부 },
            ]}
            value={linkType}
            onChange={setLinkType}
          />
          <Antd.Input
            placeholder="https://notion.so"
            disabled={linkType === ProgramCardLinkType.없음}
            value={linkUrl}
            onChange={setLinkUrl}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          콘텐츠 블럭 <Antd.Input.TextArea />
        </Antd.Input.Group>
        <Antd.Input.Group>
          <Antd.Radio.Group
            buttonStyle="solid"
            optionType="button"
            style={{ marginRight: "16px" }}
            value={location}
            onChange={setLocation}
            options={[
              { label: "가정방문", value: ProgramCardLocationType.가정방문 },
              { label: "온라인", value: ProgramCardLocationType.온라인 },
              { label: "현장체험", value: ProgramCardLocationType.현장체험 },
            ]}
          />
          <Antd.Checkbox
            style={{ marginRight: "16px" }}
            checked={hasKit}
            onChange={setHasKit}
          >
            키트가 있나요?
          </Antd.Checkbox>
          대상
          <Antd.Select
            style={{ marginLeft: "8px", width: "88px" }}
            value={target}
            onChange={setTarget}
          >
            <Antd.Select.Option value={ProgramCardTarget.부모님}>
              부모님
            </Antd.Select.Option>
            <Antd.Select.Option value={ProgramCardTarget.아이}>
              아이
            </Antd.Select.Option>
          </Antd.Select>
        </Antd.Input.Group>
      </Antd.Space>
    </div>
  );
}
