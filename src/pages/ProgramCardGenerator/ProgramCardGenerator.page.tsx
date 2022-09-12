import { Antd, RequiredAsterisk } from "components";
import { ProgramCard } from "components/ProgramCard";
import { getTags } from "components/ProgramCard/ProgramCard.utils";
import {
  copy,
  useCheckboxState,
  useRadioState,
  useSelectState,
  useStringInputState,
} from "hooks";
import { useAlert } from "pages/ProgramContentsBlock/ProgramContentsBlock.hooks";
import { useState } from "react";
import * as uuid from "uuid";
import {
  CardTypeRadio,
  ConceptTypeRadio,
  ContentsBlockTextArea,
  ExtraInputGroup,
  OrderNumberAndPackageIdInput,
  RecommendAgeSlider,
  SubjectSelect,
  SubtitleInput,
  ThumbnailInput,
  TitleInput,
  UrlAndTypeInputGroup,
  VisibleAndEndDateBadgeChecbox as VisibleAndEndDateBadgeCheckbox,
} from "./components";
import {
  ProgramCardConceptType,
  ProgramCardLinkType,
  ProgramCardLocationType,
  ProgramCardSubjectType,
  ProgramCardTarget,
  ProgramCardType,
  ProgramCardUIType,
} from "./ProgramCardGenerator.model";

export default function ProgramCardGenerator() {
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

  const [recommendAges, setRecommendAges] = useState<number[]>([]);

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

  const [contentsBlocks, setContentsBlocks] = useStringInputState("");

  const { alertMessage, alertStyle, isShowingAlert, showAlert } = useAlert();

  const validateRequiredValues = () => {
    if (!title) {
      return "타이틀을 채워주세요!";
    }

    if (!subtitle) {
      return "서브타이틀을 채워주세요!";
    }

    if (!thumbnail) {
      return "카드 썸네일 주소를 채워주세요!";
    }

    if (!recommendAges.length) {
      return "추천 연령 옆 적용하기 버튼을 눌러주세요!";
    }

    if (openDuration.length !== 2) {
      return "노출 기간을 설정해주세요!";
    }

    return "";
  };

  const copyForSpreadSheet = () => {
    const errorMessage = validateRequiredValues();
    if (errorMessage) {
      return showAlert(errorMessage);
    }

    const fields = [
      uuid.v4(),
      title.replaceAll("\n", "<br />"),
      subtitle,
      cardType,
      uiType,
      thumbnail,
      +isShowing, // 0 또는 1로 표현
      `[${recommendAges.join()}]`,
      conceptType,
      openDuration[0], // 오픈날짜
      openDuration[1], // 클로즈 날짜
      shareThumbnail,
      +isShowingEndDate, // 0 또는 1로 표현
      orderNumber,
      subjects.length ? `[${subjects.join()}]` : "",
      packageId,
      linkType === ProgramCardLinkType.없음 ? "" : linkUrl,
      linkType === ProgramCardLinkType.없음 ? "" : linkType,
      `"${contentsBlocks.replace(/"/g, '""')}"`,
      location,
      +hasKit,
      target,
    ];

    copy(fields.join("\t")).then(() =>
      showAlert("스프레드 시트용! 복사했어요~!")
    );
  };

  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      {isShowingAlert && (
        <Antd.Alert style={alertStyle} message={alertMessage} type="error" />
      )}
      <Antd.Space direction="vertical" size="large">
        <TitleInput title={title} setTitle={setTitle} />
        <SubtitleInput setSubtitle={setSubtitle} subtitle={subtitle} />
        <CardTypeRadio
          cardType={cardType}
          setCardType={setCardType}
          setUiType={setUiType}
          uiType={uiType}
        />
        <ThumbnailInput setThumbnail={setThumbnail} thumbnail={thumbnail} />
        <VisibleAndEndDateBadgeCheckbox
          isShowing={isShowing}
          isShowingEndDate={isShowingEndDate}
          setIsShowing={setIsShowing}
          setIsShowingEndDate={setIsShowingEndDate}
        />
        <RecommendAgeSlider
          recommendAges={recommendAges}
          setRecommendAges={setRecommendAges}
        />
        <ConceptTypeRadio
          conceptType={conceptType}
          setConceptType={setConceptType}
        />

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
            placeholder="https://storage.googleapis.com/program/card/share/event_3_share.png"
            value={shareThumbnail}
            onChange={setShareThumbnail}
          />
        </Antd.Input.Group>

        <OrderNumberAndPackageIdInput
          orderNumber={orderNumber}
          packageId={packageId}
          setOrderNumber={setOrderNumber}
          setPackageId={setPackageId}
        />

        <SubjectSelect setSubjects={setSubjects} subjects={subjects} />

        <UrlAndTypeInputGroup
          linkType={linkType}
          linkUrl={linkUrl}
          setLinkType={setLinkType}
          setLinkUrl={setLinkUrl}
        />

        <ContentsBlockTextArea
          contentsBlocks={contentsBlocks}
          setContentsBlocks={setContentsBlocks}
        />

        <ExtraInputGroup
          hasKit={hasKit}
          location={location}
          setHasKit={setHasKit}
          setLocation={setLocation}
          setTarget={setTarget}
          target={target}
        />

        <Antd.Input.Group style={{ marginTop: "48px" }}>
          <Antd.Button
            style={{ marginRight: "24px" }}
            size="large"
            type="primary"
            onClick={copyForSpreadSheet}
          >
            스프레드 시트에 붙여넣을거에요!
          </Antd.Button>
        </Antd.Input.Group>
      </Antd.Space>

      <div
        style={{
          position: "fixed",
          left: "100%",
          top: "10%",
          width: "400px",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1,
          transform: showPreview ? "translateX(-105%)" : "translateX(0%)",
        }}
      >
        <Antd.Button
          style={{
            transform: "rotate(-90deg) translateX(-110%)",
            position: "absolute",
            left: "-16px",
            transformOrigin: "left",
          }}
          type="primary"
          onClick={() => setShowPreview((prev) => !prev)}
        >
          카드 미리보기
        </Antd.Button>
        <ProgramCard
          description={subtitle}
          tags={getTags({
            locationType: location,
            conceptType,
            endDateString: openDuration[1] || "",
            hasEndDateBadge: isShowingEndDate,
            hasKit,
            target,
          })}
          thumbnail={`${thumbnail}?${Date.now()}`}
          title={title.replace(/\n/g, "<br/>")}
          uiType={uiType}
        />
      </div>
    </div>
  );
}
