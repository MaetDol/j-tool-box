import { TagData } from "pages/ProgramCardGenerator/ProgramCardGenerator.model";
import { Tag } from "../Tag.component";
import "../Card.styles.css";

type Props = {
  description: string;
  title: string;
  tags: TagData[];
  thumbnail: string;
};

export function Circle({ description, tags, thumbnail, title }: Props) {
  return (
    <div className="card">
      <div className="program-card p002">
        <div className="program-card__info">
          <div
            className="sub"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        </div>
        <div
          className="program-card__img"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="tags">
            {tags.map(({ name, type }) => (
              <Tag key={name} name={name} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
