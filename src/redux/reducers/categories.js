const initialValue = {
	category: 'all'
}

const items = (state = initialValue, action) => {
	switch (action.type) {
		case 'SET_CATEGORY':
			return {
				...state,
				category: action.payload
			}
		default:
			return state
	}
}

export default items
