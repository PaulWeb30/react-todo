import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = ({ deleteTodoFunc, setTodoCompleted }) => {
	const { items } = useSelector(state => state.items)
	return (
		<div className='max-w-7xl mx-auto my-0 flex flex-col gap-4'>
			{items.length > 0 ? (
				items.map(t => (
					<div
						key={t.id + t.title}
						className='flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-13 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					>
						<p
							onClick={() => setTodoCompleted(t.id)}
							className='text-lg font-mono capitalize mr-auto items-stretch cursor-pointer'
						>
							{t.title}
						</p>
						{t.completed ? (
							<h3 className='text-red-500 text-md'>completed</h3>
						) : (
							<h3 className='text-red-500 text-md'>uncompleted</h3>
						)}
						<button
							className='text-md ml-6'
							onClick={() => deleteTodoFunc(t.id)}
							onSubmit={(e) => e.preventDefault()}
						>
							deleteTodo
						</button>
					</div>
				))
			) : (
				<h1 className='text-white text-center text-2xl'>No todos</h1>
			)}
		</div>
	)
}

export default React.memo(TodoList)
