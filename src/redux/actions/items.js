import axios from 'axios'
export const setTodos = payload => ({
	type: 'SET_TODOS',
	payload,
})
export const addTodo = payload => ({
	type: 'ADD_TODO',
	payload,
})

export const deleteTodo = payload => ({
	type: 'DELETE_TODO',
	payload,
})
export const isLoading = payload => ({
	type: 'SET_LOADING',
	payload,
})
export const fetchTodos = category => dispatch => {
	dispatch(isLoading(true))
	axios
		.get(
			category === 'all'
				? 'http://localhost:3001/todos'
				: category === 'completed'
				? 'http://localhost:3001/todos?completed=true'
				: category === 'uncompleted'
				? 'http://localhost:3001/todos?completed=false'
				: 'http://localhost:3001/todos'
		)
		.then(({ data }) => {
			dispatch(setTodos(data))
		})
}
