import { useEffect, useState } from "react";
import Link from "next/link";

export default function Tags({ _tags }) {
  const [tags, setTags] = useState([]);
  const [moretags, setMoreTags] = useState([]);

  useEffect(() => {
    setTags(_tags.slice(0, 2));
  }, [_tags]);
  useEffect(() => {
    setMoreTags(_tags.slice(2, _tags?.length));
  }, [_tags]);

  const handleExpandTags = () => {
    setTags(_tags);
  };

  return (
    <div className="flex items-center">
      {tags.map((tag, index) => (
        <Link href={`/tag/${tag.name}`} key={index}>
          <a
            className={`tags__inner my-2 ${
              index === 0 && _tags.length > 1 && "tags__inner--border"
            }`}
          >
            {tag.name}
          </a>
        </Link>
      ))}
      <div>
        {_tags.length - 2 > 0 && _tags.length !== tags.length && (
          <div className="cursor-pointer text-blue-600 tags__tool tooltip font-normal">
            +{_tags.length - 2}
            <span className="tooltip__text flex flex-wrap">
              {moretags.map((tag, ind) => (
                <Link href={`/tag/${tag.name}`} key={ind}>
                  <a className="hover:text-blue-900">{`${tag.name}${
                    ind !== moretags - 1 && ", "
                  }`}</a>
                </Link>
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
