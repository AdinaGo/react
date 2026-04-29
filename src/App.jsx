import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Post from "./components/Post";
import styles from "./components/Post.module.css";
import NewPost from "./components/NewPost";

function App() {
  const [isFromOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([
    { name: "Adina Gordon", content: "This is the content of my post." },
    { name: "Ayala Levi", content: "This is another post." },
    { name: "David Cohen", content: "This is yet another post." },
  ]);

  const handlePostsChange = (index, newContent) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].content = newContent;
      return updatedPosts;
    });
  };
  const handlePrintPosts = () => {
    console.log("Current posts:", posts);
  };

  const handleNewPostClick = () => {
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handleAddPost = (name, content) => {
    setPosts((prevPosts) => [...prevPosts, { name, content }]);
  };

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          content={post.content}
          onEdit={(newContent) => handlePostsChange(index, newContent)}
          onDelete={() => deletePost(index)}
        />
      ))}
      <div>
        <button className={styles.button} onClick={handleNewPostClick}>
          Create New Post
        </button>
        <button className={styles.button} onClick={handlePrintPosts}>
          Print posts to the console
        </button>
      </div>
      {isFromOpen && (
        <>
          <div className="NewPostBackground" onClick={handleCancel} />
          <NewPost closeDialog={handleCancel} onAddPost={handleAddPost} />
        </>
      )}
    </>
  );
}

export default App;
