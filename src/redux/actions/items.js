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
				? 'https://61f80652783c1d0017c4455d.mockapi.io/items'
				: category === 'completed'
				? 'https://61f80652783c1d0017c4455d.mockapi.io/items?completed=true'
				: category === 'uncompleted'
				? 'https://61f80652783c1d0017c4455d.mockapi.io/items?completed=false'
				: 'https://61f80652783c1d0017c4455d.mockapi.io/items'
		)
		.then(({ data }) => {
			dispatch(setTodos(data))
		})
}
