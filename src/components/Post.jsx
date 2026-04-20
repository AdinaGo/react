import styles from "./Post.module.css";
import { useState } from "react";

function Post(props) {
  const [postContent, setPostContent] = useState(props.content);
  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.author}>{props.author}'s Post</h2>
      <p className={styles.content}>{postContent}</p>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
        placeholder="edit your content"
      />
    </div>
  );
}
export default Post;
