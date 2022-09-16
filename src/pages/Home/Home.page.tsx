import { Antd } from "components";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { timeline } from "./Home.model";

export default function Home() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = searchParams.get("redirect");
    if (!redirect) return;

    navigate(redirect);
  }, [searchParams, navigate]);

  return (
    <div>
      <Antd.Typography.Title level={1}>J-Tool-Box</Antd.Typography.Title>
      <Antd.Typography.Paragraph>
        특정 도메인에 관련된 도구들을 모아둔 사이트에요
      </Antd.Typography.Paragraph>
      <Antd.Typography.Paragraph>
        문제가 있다면 Github issue 로 남겨주세요. 본인에게 구두로 전달해주셔도
        좋아요 🙂
      </Antd.Typography.Paragraph>
      <Antd.Typography.Paragraph>
        Github :{" "}
        <a
          href="https://github.com/MaetDol/j-tool-box"
          target="_blank"
          rel="noreferrer"
        >
          MaetDol
        </a>
      </Antd.Typography.Paragraph>
      <Antd.Typography.Title level={2}>타임 라인</Antd.Typography.Title>
      <Antd.Timeline>
        {timeline.map(({ timestamp, contents }) => (
          <Antd.Timeline.Item key={timestamp}>
            <Antd.Tag>{timestamp}</Antd.Tag>
            {contents.map((content) => (
              <p style={{ margin: 0 }} key={content}>
                {content}
              </p>
            ))}
          </Antd.Timeline.Item>
        ))}
      </Antd.Timeline>
    </div>
  );
}
