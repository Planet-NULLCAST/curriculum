import { useEffect, useState } from "react";
import Link from "next/link";

export default function Tags({ _tags }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(_tags.slice(0, 3));
  }, [_tags]);

  const handleExpandTags = () => {
    setTags(_tags);
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <Link href={`/tag/${tag}`} key={index}>
          <a className="tags__item mr-2 my-2">{tag}</a>
        </Link>
      ))}
      <div>
        {_tags.length - 3 > 0 && _tags.length !== tags.length && (
          <span
            onClick={handleExpandTags}
            className="cursor-pointer text-blue-600 font-semibold underline"
          >
            +{_tags.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
}
