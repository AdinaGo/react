import styles from "./Post.module.css";
import { useState } from "react";

function Post({ name, content = "", onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedContent(content);
  };
  const handleSaveClick = () => {
    onEdit(editedContent);
    setIsEditing(false);
  };
  const editButton = (
    <button className={styles.button} onClick={handleEditClick}>
      Edit
    </button>
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.author}>{name}'s Post</h2>
      <p className={styles.content}>{content}</p>

      {!isEditing && editButton}
      {isEditing && (
        <div className={styles.editSection}>
          <input
            className={styles.input}
            type="text"
            onChange={handleInputChange}
            placeholder="edit your content"
          />

          <button className={styles.button} onClick={handleSaveClick}>
            Save
          </button>
          <button className={styles.button} onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
export default Post;
