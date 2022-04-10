import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addTodo } from '../../redux/actions/items'
const AddTodo = () => {
	const [title, setTitle] = useState('')
	const dispatch = useDispatch()
	const handleClick = e => {
		e.preventDefault()
		if (title.trimStart().length > 0) {
			axios({
				method: 'post',
				url: 'http://localhost:3001/todos',
				data: {
					userId: Date.now(),
					id: Math.random().toString(16).slice(-4),
					title,
					completed: false,
				},
			}).then(todo => dispatch(addTodo(todo)))
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
