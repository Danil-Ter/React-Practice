
import React, { useState } from 'react';
import TitleInput from './TitleInput.js';

const AddPostButton = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !isTitleValid) {
      return;
    }
    onAdd(title, body);
    setTitle('');
    setBody('');
    setIsTitleValid(true);
    setShowForm(false);
  };

  return (
    <div className="add-post">
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <TitleInput value={title} onChange={setTitle} setIsValid={setIsTitleValid} />
          <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)}></textarea>
          <button type="submit">Add Post</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Post</button>
      )}
    </div>
  );
};

export default AddPostButton;


