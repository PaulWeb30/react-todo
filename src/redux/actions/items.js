import axios from "axios"

export const setTodos = payload => ({
	type: 'SET_TODOS',
	payload,
})
export const addTodo = payload => ({
	type: 'ADD_TODO', payload
})

export const deleteTodo = payload => ({
	type: 'DELETE_TODO', payload
})

export const fetchTodos = () => dispatch => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
			.then(({ data }) => {
				dispatch(setTodos(data))
			})
} 
