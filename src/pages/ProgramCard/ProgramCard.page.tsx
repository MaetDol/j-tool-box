import { Antd } from "components";

export default function ProgramCard() {
  return (
    <div>
      <Antd.Space direction="vertical" size="large">
        <Antd.Input.Group>
          카드 타이틀
          <Antd.Input.TextArea
            placeholder={`카드 타이틀을
입력해주세용`}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          카드 서브타이틀
          <Antd.Input placeholder="서브 타이틀을 입력해주세요" />
        </Antd.Input.Group>
        <Antd.Input.Group>
          <Antd.Radio.Group
            buttonStyle="solid"
            optionType="button"
            style={{ marginRight: "24px" }}
            options={[
              { label: "배너", value: 1 },
              { label: "기획전", value: 2 },
              { label: "프로그램", value: 3 },
            ]}
          />
          카드 UI 유형
          <Antd.Select style={{ width: "240px", marginLeft: "8px" }}>
            <Antd.Select.Option value="P001">Wide</Antd.Select.Option>
            <Antd.Select.Option value="P002">Circle Mask</Antd.Select.Option>
            <Antd.Select.Option value="P003">전문쌤 검정</Antd.Select.Option>
            <Antd.Select.Option value="P004">전문쌤 하양</Antd.Select.Option>
            <Antd.Select.Option value="B001">배너 기본</Antd.Select.Option>
            <Antd.Select.Option value="E001">기획전 기본</Antd.Select.Option>
            <Antd.Select.Option value="E002">기획전 기본2</Antd.Select.Option>
          </Antd.Select>
        </Antd.Input.Group>
        <Antd.Input.Group>
          썸네일 주소
          <Antd.Input placeholder="https://storage.googleapis.com/event_3_thumb.webp" />
        </Antd.Input.Group>
        <Antd.Input.Group>
          <Antd.Checkbox>노출 여부</Antd.Checkbox>
          <Antd.Checkbox>종료 일자 뱃지 표시</Antd.Checkbox>
        </Antd.Input.Group>
        <Antd.Input.Group>
          추천 연령
          <div style={{ display: "flex" }}>
            <Antd.InputNumber />
            <Antd.Slider
              style={{ width: "100%" }}
              range
              min={2}
              max={14}
              defaultValue={[4, 13]}
            />
            <Antd.InputNumber />
            <Antd.Button style={{ marginLeft: "8px" }}>추가하기</Antd.Button>
          </div>
        </Antd.Input.Group>
        <Antd.Input.Group style={{ marginBottom: "16px" }}>
          프로그램 컨셉
          <Antd.Radio.Group
            style={{ marginLeft: "16px" }}
            optionType="button"
            buttonStyle="solid"
            options={[
              { label: "전문가", value: 1 },
              { label: "일반", value: 2 },
            ]}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          노출 기간
          <Antd.DatePicker.RangePicker showTime style={{ marginLeft: "8px" }} />
        </Antd.Input.Group>
        <Antd.Input.Group>
          공유시 노출될 썸네일
          <Antd.Input placeholder="image" />
        </Antd.Input.Group>
        <Antd.Input.Group>
          노출 순서
          <Antd.InputNumber style={{ margin: "0 16px 0 8px" }} />
          패키지 ID
          <Antd.Input
            placeholder="250"
            style={{
              width: "120px",
              float: "none",
              display: "inline-block",
              margin: "0 16px 0 8px",
            }}
          />
          연결 유형
          <Antd.Radio.Group
            style={{ marginLeft: "8px" }}
            buttonStyle="solid"
            optionType="button"
            options={[
              { label: "내부", value: 1 },
              { label: "외부", value: 2 },
            ]}
          />
        </Antd.Input.Group>
        <Antd.Input.Group>
          과목 유형
          <Antd.Select mode="multiple" style={{ width: "100%" }}>
            <Antd.Select.Option value={1}>외국어</Antd.Select.Option>
            <Antd.Select.Option value={2}>수학/과학</Antd.Select.Option>
            <Antd.Select.Option value={3}>한글/국어</Antd.Select.Option>
            <Antd.Select.Option value={4}>예체능</Antd.Select.Option>
          </Antd.Select>
        </Antd.Input.Group>
        <Antd.Input.Group>
          연결 url <Antd.Input placeholder="" />
        </Antd.Input.Group>
        <Antd.Input.Group>
          콘텐츠 블럭 <Antd.Input.TextArea />
        </Antd.Input.Group>
        <Antd.Input.Group>
          <Antd.Radio.Group
            buttonStyle="solid"
            optionType="button"
            style={{ marginRight: "16px" }}
            options={[
              { label: "오프라인", value: 0 },
              { label: "온라인", value: 1 },
              { label: "현장체험", value: 1 },
            ]}
          />
          <Antd.Checkbox style={{ marginRight: "16px" }}>
            키트가 있나요?
          </Antd.Checkbox>
          대상
          <Antd.Select style={{ marginLeft: "8px", width: "88px" }}>
            <Antd.Select.Option value={2}>부모님</Antd.Select.Option>
            <Antd.Select.Option value={4}>아이</Antd.Select.Option>
          </Antd.Select>
        </Antd.Input.Group>
      </Antd.Space>
    </div>
  );
}
