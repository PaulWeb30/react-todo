import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo, TodoList } from './components/index'
import { fetchTodos, addTodo, deleteTodo, setTodos } from './redux/actions'
function App() {
	const dispatch = useDispatch()
	const items = useSelector(state => state.items)
	React.useEffect(() => {
		dispatch(fetchTodos())
	}, [])
	const addTodoFunc = React.useCallback(title => {
		const todo = {
			id: Date.now(),
			title,
		}
		dispatch(addTodo(todo))
	})
	const deleteTodoFunc = React.useCallback(id => {
		dispatch(deleteTodo(id))
	})
	const setTodoCompleted = React.useCallback(id => {
		const item = items.find(t => t.id === id)
		item.completed = !item.completed
		items.splice(id - 1, 1, item)
		dispatch(setTodos(items))
	})
	return (
		<div className='w-full mx-auto flex justify-center flex-col'>
			<AddTodo addTodoFunc={addTodoFunc} />
			<TodoList
				deleteTodoFunc={deleteTodoFunc}
				setTodoCompleted={setTodoCompleted}
			/>
		</div>
	)
}

export default App
