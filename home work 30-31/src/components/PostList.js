import React, { useState, useEffect } from 'react'; 
import Post from './Post'; 
import PostEditor from './PostEditor'; 
import AddPostButton from './AddPostButton'; 

const PostList = () => { 
const [posts, setPosts] = useState([]);
const [editing, setEditing] = useState(null);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3') 
.then(response => response.json()) 
.then(data => setPosts(data)) 
.catch(error => console.log(error)); 
}, []); 

const handleDelete = (id) => { 
const updatedPosts = posts.filter(post => post.id !== id);
setPosts(updatedPosts); 
}

const handleEdit = (id) => { 
setEditing(id);
};

const handleSave = (id, title, body) => {
const updatedPosts = [...posts]; 
const index = updatedPosts.findIndex(post => post.id === id); 
const postToEdit = updatedPosts[index]; 
postToEdit.title = title;
postToEdit.body = body; 
setPosts(updatedPosts);
    setEditing(null);
  }

  const handleCancel = () => {
    setEditing(null);
  }

  const handleAdd = (title, body) => {
    const newPost = {
      title: title,
      body: body,
      userId: 1,
      id: posts.length + 1
    };
    setPosts([...posts, newPost]);
  }
  
  return (
    <div className="container">
      {posts.map(post => (
        <div key={post.id}>
          {editing === post.id ? (
            <PostEditor post={post} onSave={handleSave} onCancel={handleCancel} />
          ) : (
            <Post post={post} onDelete={handleDelete} onEdit={handleEdit} />
          )}
        </div>
      ))}
      <AddPostButton onAdd={handleAdd} />
    </div>
  );
  
}

export default PostList;


