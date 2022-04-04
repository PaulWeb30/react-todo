const initialValue = {
	items: [],
}

const items = (state = initialValue, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				items: [action.payload, ...state.items],
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
			}
		default:
			return state
	}
}

export default items
