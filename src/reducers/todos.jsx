export const initialState = [
  {
    id: 0,
    title: "Clean dishes",
    isComplete: false,
    color: "lightgrey",
  },
  {
    id: 1,
    title: "Take out trash",
    isComplete: false,
    color: "lightgrey",
  },
  {
    id: 2,
    title: "Feed pets",
    isComplete: true,
    color: "lightgrey",
  },
];

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "addTodo": {
      console.log(action.type);
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({
        id: newId,
        title: action.payload.title,
        isComplete: false,
        color: action.payload.color,
      });
      return newTodos;
    }
    case "deleteTodo": {
      console.log(action.type);
      const newTodos = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return newTodos;
    }
    case "resetTodo": {
      console.log(action.type);
      return initialState;
    }
    case "toggleTask": {
      console.log(action.type);
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    }
    default: {
      console.log("invalid action");
      return state;
    }
  }
}
