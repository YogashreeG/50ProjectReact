import React, { useState } from "react";
import "./CreateTag.css"

export const CreateTag = () => {
    const [tags, setTags] = useState(["please", "do not"]);
    const addTags = (e) => {
    console.log(e.target.value, e.key);

       if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };
    const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  return (
    <div className="App">
      <div className="tag-container">
        {tags.map((tags, index) => {
          return (
            <div key={index} className="tag">
              {tags} <span onClick={() => removeTag(tags)}>x</span>
            </div>
          );
        })}

        <input onKeyDown={addTags} />
      </div>
    </div>
  );
};
