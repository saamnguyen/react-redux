// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 1, name: "Learn ReactJS", completed: false, priority: "Medium" },
// }

//action creators
export const addTodo = (data) => {
	return {
		type: "todoList/addTodo",
		payload: data,
	};
};

export const searchFilterChange = (text) => {
	return {
		type: "filters/searchFilterChange",
		payload: text,
	};
};

export const statusFilterChange = (status) => {
	return {
		type: "filters/statusFilterChange",
		payload: status,
	};
};
