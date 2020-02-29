import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "../actions";

const initialState = {
  todos: [
    { content: 'Hello, World', completed: false, },
    { content: 'TravelEatMeat', completed: false, },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: insertTodos(state.todos, payload),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: removeTodo(state.todos, payload),
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: toggleTodo(state.todos, payload),
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: editTodo(state.todos, payload.index, payload.content),
      };
    }
    default:
      return state;
  }
}

function toggleTodo(todos, todoIndex) {
  return todos.map((item, index) => {
    if (index !== todoIndex) {
      return item;
    }

    return {
      ...item,
      completed: !item.completed,
    };
  });
}

function insertTodos(todos, content) {
  let newTodos = todos.slice();
  newTodos.splice(0, 0, { content, completed: false });
  return newTodos;
}

function removeTodo(todos, index) {
  let newTodos = todos.slice();
  newTodos.splice(index, 1);
  return newTodos;
}

function editTodo(todos, todoIndex, newContent) {
  return todos.map((item, index) => {
    if (index !== todoIndex) {
      return item;
    }

    return {
      ...item,
      content: newContent,
    };
  });
}
