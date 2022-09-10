import { Antd, RequiredAsterisk } from "components";
import { ChangeEventHandler } from "react";

type Props = {
  thumbnail: string;
  setThumbnail: ChangeEventHandler<HTMLInputElement>;
};

export function ThumbnailInput({ setThumbnail, thumbnail }: Props) {
  return (
    <Antd.Input.Group>
      썸네일 주소
      <RequiredAsterisk />
      <Antd.Input
        value={thumbnail}
        onChange={setThumbnail}
        placeholder="https://storage.googleapis.com/event_3_thumb.webp"
      />
    </Antd.Input.Group>
  );
}
