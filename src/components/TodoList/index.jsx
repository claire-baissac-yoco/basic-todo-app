import { useState, useReducer } from "react";
import { reducer, initialState } from "../../reducers/todos";
import NewTodoForm from "../NewTodoForm";
import Todo from "../Todo";
import styles from "./TodoList.module.css";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function onDeleteTodo(id) {
    console.log(id);
    dispatch({ type: "deleteTodo", payload: id });
  }

  function onResetButtonClick() {
    dispatch({ type: "resetTodo" });
  }

  function onAddTodoClick() {
    setIsFormVisible(true);
  }

  function onAddNewTodo(title, color) {
    console.log(title);
    dispatch({ type: "addTodo", payload: { title: title, color: color } });
    setIsFormVisible(false);
  }

  function onCancelAddTodo() {
    setIsFormVisible(false);
  }

  function onToggleTask(id) {
    console.log(id);
    dispatch({ type: "toggleTask", payload: id });
  }

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onResetButtonClick}>
          Reset
        </button>
        <button className={styles.button} onClick={onAddTodoClick}>
          Add Todo
        </button>
      </div>
      <div>
        <h2>To do</h2>
        <div>
          {state
            .filter((todo) => {
              return !todo.isComplete;
            })
            .map((todo) => {
              return (
                <Todo
                  id={todo.id}
                  title={todo.title}
                  color={todo.color}
                  isComplete={todo.isComplete}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTask={onToggleTask}
                />
              );
            })}
        </div>
      </div>
      <div>
        <h2>Completed</h2>
        <div>
          {state
            .filter((todo) => {
              return todo.isComplete;
            })
            .map((todo) => {
              return (
                <Todo
                  id={todo.id}
                  title={todo.title}
                  color={todo.color}
                  isComplete={todo.isComplete}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTask={onToggleTask}
                />
              );
            })}
        </div>
      </div>
      {isFormVisible && (
        <NewTodoForm
          onAddNewTodo={onAddNewTodo}
          onCancelAddTodo={onCancelAddTodo}
        />
      )}
    </div>
  );
}

export default TodoList;
