import { useState } from "react";
import styles from "./NewTodoForm.module.css";

function NewTodoForm({ onAddNewTodo, onCancelAddTodo }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }

  function onColorChange(event) {
    setColor(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onAddNewTodo(title, color);
  }

  function onCancel(event) {
    event.preventDefault();
    onCancelAddTodo();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formHeading}>Add a new todo</h2>
        <form className={styles.formBody} onSubmit={onFormSubmit}>
          <div className={styles.formInput}>
            <label>Title: </label>
            <input
              type="text"
              onChange={onTitleChange}
              value={title}
              required
            ></input>
          </div>
          <div className={styles.formInput}>
            <label>Background color: </label>
            <input
              type="color"
              onChange={onColorChange}
              value={color}
              required
            />
          </div>
          <div className={styles.formButtons}>
            <button className={styles.button} type="submit">
              Submit
            </button>
            <button className={styles.button} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTodoForm;
