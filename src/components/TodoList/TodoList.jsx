import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = ({ deleteTodoFunc, setTodoCompleted }) => {
	const items = useSelector(state => state.items.items)
	return (
		<div className='max-w-7xl mx-auto my-0'>
			{items &&
				items.map(t => (
					<>
						<div className='flex items-center'>
							<p
								className='cursor-pointer'
								onClick={() => setTodoCompleted(t.id)}
							>
								{t.title}
							</p>
							<input type='checkbox' checked={t.completed} />
						</div>
						<button onClick={() => deleteTodoFunc(t.id)}>deleteTodo</button>
					</>
				))}
		</div>
	)
}

export default React.memo(TodoList)
