import React, { useState } from 'react'
const AddTodo = ({addTodoFunc}) => {
	const [title, setTitle] = useState('')
	const handleClick = e => {
		e.preventDefault()
		if (title.trimStart().length > 0) {
			addTodoFunc(title)
			setTitle('')
		} else {
			setTitle('')
		}
	}
	return (
		<form onSubmit={e => handleClick(e)} className='flex justify-center py-10'>
			<input
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				onKeyPress={event => event.key === 'Enter' && handleClick()}
				value={title}
				onChange={e => setTitle(e.target.value)}
				type='text'
				placeholder='Add todo'
			/>
			<button type='submit' className='text-gray-900 bg-gray-50 px-3'>
				Add todo
			</button>
		</form>
	)
}

export default React.memo(AddTodo)
