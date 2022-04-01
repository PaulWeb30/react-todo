import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = ({ deleteTodoFunc, setTodoCompleted }) => {
	const items = useSelector(state => state.items)
	return (
		<>
			{items &&
				items.map(t => (
					<div className=' flex justify-center' key={t.id}>
						<li className='cursor-pointer' onClick={() => setTodoCompleted(t.id)}>{t.title}</li>
						<span className='text-red-500 px-10'>
							{t.completed ? 'completed' : 'not completed'}
						</span>
						<button onClick={() => deleteTodoFunc(t.id)}>deleteTodo</button>
					</div>
				))}
		</>
	)
}

export default React.memo(TodoList)
