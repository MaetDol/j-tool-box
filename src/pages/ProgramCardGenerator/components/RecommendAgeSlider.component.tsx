import { Antd, RequiredAsterisk } from "components";
import React, { useState } from "react";

type Props = {
  recommendAges: number[];
  setRecommendAges: React.Dispatch<React.SetStateAction<number[]>>;
};

export function RecommendAgeSlider({ recommendAges, setRecommendAges }: Props) {
  const [recommendAgeSlider, setRecommendAgeSlider] = useState<
    [number, number]
  >([4, 13]);

  const generateRecommendAge = () => {
    setRecommendAges(
      Array.from(
        { length: recommendAgeSlider[1] - recommendAgeSlider[0] + 1 },
        (_, i) => i + recommendAgeSlider[0]
      )
    );
  };

  const removeAgeTag = (age: number) => () => {
    setRecommendAges(
      recommendAges.filter((recommendAge) => recommendAge !== age)
    );
  };

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
        <Antd.Button
          style={{ marginLeft: "8px" }}
          type="primary"
          onClick={generateRecommendAge}
        >
          적용하기
        </Antd.Button>
      </div>
      <Antd.Layout
        style={{ marginTop: "8px", padding: "8px", minHeight: "64px" }}
      >
        <div>
          {recommendAges.map((age) => (
            <Antd.Tag
              style={{ marginBottom: "8px" }}
              closable
              key={age}
              onClose={removeAgeTag(age)}
            >
              {age}세
            </Antd.Tag>
          ))}
        </div>
      </Antd.Layout>
    </Antd.Input.Group>
  );
}
