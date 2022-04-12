import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo, TodoList, Categories, Loader } from './components/index'
import {
	fetchTodos,
	addTodo,
	deleteTodo,
	setTodos,
} from './redux/actions/items'
function App() {
	const dispatch = useDispatch()
	const { items } = useSelector(state => state.items)
	const { category } = useSelector(state => state.categories)
	const { isLoading } = useSelector(state => state.items)
	React.useEffect(() => {
		dispatch(fetchTodos(category))
	}, [category])

	const deleteTodoFunc = React.useCallback((id) => {
		axios.delete(`http://localhost:3001/todos/${id}`)
		dispatch(deleteTodo(id))
	},[])
	const setTodoCompleted = React.useCallback((id) => {
		const item = items.find(t => t.id === id)
		item.completed = !item.completed
		const data = {
			...item,
			completed: item.completed,
		}
		axios.patch(`http://localhost:3001/todos/${id}`, data)
		dispatch(setTodos(items))
	},[])
	const addTodoFunc = React.useCallback((title) => {
		axios({
			method: 'post',
			url: 'http://localhost:3001/todos',
			data: {
				userId: Date.now(),
				id: Math.random().toString(16).slice(-4),
				title,
				completed: false,
			},
		})
		dispatch(
			addTodo({
				userId: Date.now(),
				id: Math.random().toString(16).slice(-4),
				title,
				completed: false,
			})
		)
	},[])

	return (
		<div className='min-h-screen bg-gray-900 text-white mx-auto'>
			<AddTodo addTodoFunc={addTodoFunc} />
			<Categories />
			{isLoading ? (
				<Loader />
			) : (
				<TodoList
					deleteTodoFunc={deleteTodoFunc}
					setTodoCompleted={setTodoCompleted}
				/>
			)}
		</div>
	)
}

export default App
