import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FiltersSlice";
import todosListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = (state = {}, action) => {
// 	//console.log({ state, action });
// 	//  {
// 	//type: 'todoList/addTodo'
// 	//payload: {id: 3, name: 'Learn ReactJS', completed: false, priority: 'Medium'},
// 	// }
// 	return {
// 		filters: filtersReducer(state.filters, action),
// 		todoList: todosListReducer(state.todoList, action),
// 	};
// };

//Neu viet tuong minh ra thi se giong het nhu code o tren
const rootReducer = combineReducers({
	filters: filtersReducer,
	todoList: todosListReducer,
});

export default rootReducer;
