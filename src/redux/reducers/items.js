const initialValue = {
	items: [],
	isLoading: false,
}

const items = (state = initialValue, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				items: [...state.items, action.payload],
			}
		case 'DELETE_TODO':
			return {
				...state,
				items: state.items.filter(t => t.id !== action.payload),
			}
		case 'SET_TODOS':
			return {
				...state,
				items: [...action.payload],
				isLoading: false,
			}
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}
		default:
			return state
	}
}

export default items
