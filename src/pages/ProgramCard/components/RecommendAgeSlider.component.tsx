import { Antd, RequiredAsterisk } from "components";
import React from "react";

type Props = {
  recommendAgeSlider: [number, number];
  setRecommendAgeSlider: React.Dispatch<React.SetStateAction<[number, number]>>;
};

export function RecommendAgeSlider({
  recommendAgeSlider,
  setRecommendAgeSlider,
}: Props) {
  return (
    <Antd.Input.Group>
      추천 연령 <RequiredAsterisk />
      <div style={{ display: "flex" }}>
        <Antd.InputNumber
          min={2}
          max={14}
          value={recommendAgeSlider[0]}
          onChange={(num) => setRecommendAgeSlider((prev) => [num, prev[1]])}
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
          onChange={(num) => setRecommendAgeSlider((prev) => [prev[0], num])}
        />
        <Antd.Button style={{ marginLeft: "8px" }} type="primary">
          적용하기
        </Antd.Button>
      </div>
    </Antd.Input.Group>
  );
}
