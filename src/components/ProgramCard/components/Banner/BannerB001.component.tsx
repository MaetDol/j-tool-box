import { FALLBACK_IMAGE_URL } from "../Card.model";
import "./Banner.styles.css";
import "../Card.styles.css";

type Props = {
  title: string;
  thumbnail: string;
};

export function BannerB001({ title, thumbnail }: Props) {
  return (
    <div className="card">
      <div
        className="banner-card"
        style={{
          backgroundImage: `url(${thumbnail}), url(${FALLBACK_IMAGE_URL})`,
        }}
      >
        <div
          className="banner-card__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
}
