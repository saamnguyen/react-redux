const initState = [
	{ id: 1, name: "Learn ReactJS", completed: false, priority: "Medium" },
	{ id: 2, name: "Learn Git", completed: true, priority: "Medium" },
	{ id: 3, name: "Learn ReactJS", completed: false, priority: "Medium" },
];

const todosListReducer = (state = initState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return [...state, action.payload];
		case "todoList/toggleTodoStatus":
			return state.map((todo) =>
				todo.id === action.payload
					? { ...state, completed: !todo.completed }
					: todo
			);
		default:
			return state;
	}
};

export default todosListReducer;
