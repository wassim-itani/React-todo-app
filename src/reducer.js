export const reducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [
        ...todos,
        { id: new Date().getTime(), text: payload.text, completed: false },
      ];

    case "DELETE_TODO":
      return todos.filter((item) => item.id !== payload.id);

    case "TOGGLE_COMPLETE":
      return todos.map((item) => {
        return item.id === payload.id
          ? { ...item, completed: !item.completed }
          : { ...item };
      });
  }
};
