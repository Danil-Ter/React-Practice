import React, { useState } from "react";

const PostEditor = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onSave(post.id, title, body);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form>
      <label>
        <textarea
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <br />
      <div className="control">
        <button className="button button-save" onClick={handleSave}>
          Save
        </button>
        <button className="button button-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostEditor;
