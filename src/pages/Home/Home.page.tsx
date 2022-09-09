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
      <Antd.Typography.Title>타임 라인</Antd.Typography.Title>
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
