import React from 'react';

const Post = ({ post, onDelete, onEdit }) => {
  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this post?');
    if (confirmed) {
      onDelete(post.id);
    }
  };

  const handleEdit = () => {
    onEdit(post.id);
  };

  return (
    <div className="post" key={post.id}>
      <h3 className="title">{post.title}</h3>
      <p className="body">{post.body}</p>
      <button className="button button-delete" onClick={handleDelete}>Delete</button>
      <button className="button button-edit" onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Post;
