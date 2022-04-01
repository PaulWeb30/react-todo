
const initialValue = {
	items: [],
}

const reducer = (state = initialValue, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				items: [action.payload ,...state.items],
			}
			case "DELETE_TODO":
				return {
					...state,
					items: state.items.filter(t => t.id !== action.payload)
				}
				case "SET_TODOS": 
				return {
					...state,
					items: action.payload
				}
				// case 'SET_COMPLETED': 
				// return {
				// 	...state,
				// 	items: action.payload
				// }
		default:
			return state
	}
}

export default reducer
