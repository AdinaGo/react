import styles from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ closeDialog, onAddPost }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPost(name, content);
    setName("");
    setContent("");
    closeDialog();
  };

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Create New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          autoFocus
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <br />
      <div className={styles.formGroup}>
        <label htmlFor="content" className={styles.label}>
          Content:
        </label>
        <textarea
          id="content"
          name="content"
          className={styles.textarea}
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>
      <br />
      <button type="submit" className={styles.button}>
        Create Post
      </button>
      <button type="button" className={styles.button} onClick={closeDialog}>
        Cancel
      </button>
    </form>
  );
}
export default NewPost;
