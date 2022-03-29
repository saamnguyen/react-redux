import { combineReducers } from "redux";

const initState = {
	filters: {
		search: "",
		status: "All",
		priority: [],
	},
	todoList: [
		{ id: 1, name: "Learn ReactJS", completed: false, priority: "Medium" },
		{ id: 2, name: "Learn Git", completed: true, priority: "Medium" },
		{ id: 3, name: "Learn ReactJS", completed: false, priority: "Medium" },
	],
};

const rootReducer = (state = initState, action) => {
	//console.log({ state, action });
	//  {
	//type: 'todoList/addTodo'
	//payload: {id: 3, name: 'Learn ReactJS', completed: false, priority: 'Medium'},
	// }
	switch (action.type) {
		case "todoList/addTodo":
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};
		case "filters/searchFilterChange":
			return {
				...state,
				filters: {
					...state.filters,
					search: action.payload,
				},
			};
		default:
			return state;
	}
};

export default rootReducer;
