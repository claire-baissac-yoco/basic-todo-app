import styles from "./Todo.module.css";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function Todo({ id, title, isComplete, onDeleteTodo, onToggleTask, color }) {
  console.log(id, color);
  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <h3 className={styles.heading}>{title}</h3>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            onToggleTask(id);
          }}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <AiFillCheckCircle />
          </IconContext.Provider>
        </button>
        <button
          className={styles.button}
          onClick={() => {
            console.log("click");
            onDeleteTodo(id);
          }}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <AiFillDelete />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Todo;
