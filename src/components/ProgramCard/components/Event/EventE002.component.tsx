import { FALLBACK_IMAGE_URL } from "../Card.model";
import "../Card.styles.css";
import "./Event.styles.css";

type Props = {
  thumbnail: string;
  title: string;
};

export function EventE002({ thumbnail, title }: Props) {
  return (
    <div className="card">
      <div
        className="event-card E002"
        style={{
          backgroundImage: `url(${thumbnail}), url(${FALLBACK_IMAGE_URL})`,
        }}
      >
        <div className="event-card__sub">
          <span></span>
          기획전
        </div>
        <div
          className="event-card__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
}
