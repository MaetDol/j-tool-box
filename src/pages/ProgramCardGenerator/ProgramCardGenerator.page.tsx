import { Antd, RequiredAsterisk } from "components";
import {
  copy,
  useCheckboxState,
  useRadioState,
  useSelectState,
  useStringInputState,
} from "hooks";
import { useState } from "react";
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
import * as uuid from "uuid";
import { useAlert } from "pages/ProgramContentsBlock/ProgramContentsBlock.hooks";
import { getTags } from "components/ProgramCard/ProgramCard.utils";
import { ProgramCard } from "components/ProgramCard";

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
  const copyForSpreadSheet = () => {
    const fields = [
      uuid.v4(),
      title.replaceAll("\n", "<br />"),
      subtitle,
      cardType,
      uiType,
      thumbnail,
      +isShowing, // 0 또는 1로 표현
      recommendAges.join(),
      conceptType,
      openDuration[0], // 오픈날짜
      openDuration[1], // 클로즈 날짜
      shareThumbnail,
      +isShowingEndDate, // 0 또는 1로 표현
      orderNumber,
      subjects.length ? subjects.join() : "",
      packageId,
      linkUrl,
      linkType === ProgramCardLinkType.없음 ? "" : linkType,
      `"${contentsBlocks.replace(/"/g, '""')}"`,
      location,
      +hasKit,
      target,
    ];
    // TODO validating
    copy(fields.join("\t")).then(() =>
      showAlert("스프레드 시트용! 복사했어요~!")
    );
  };

  return (
    <div>
      {isShowingAlert && (
        <Antd.Alert style={alertStyle} message={alertMessage} />
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
            placeholder="https://storage.googleapis.com/share_event_3.webp"
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
          <Antd.Button size="large" type="primary">
            INSERT 바로 할거에요!
          </Antd.Button>
        </Antd.Input.Group>
      </Antd.Space>
    </div>
  );
}