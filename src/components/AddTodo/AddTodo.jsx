import React, { useState } from 'react'

const AddTodo = ({ addTodoFunc }) => {
	const [title, setTitle] = useState('')
	const handleClick = () => {
		addTodoFunc(title)
		setTitle('')
	}
	return (
		<div className='flex justify-center py-10'>
			<input 
				className='border-red-500'
				value={title}
				onChange={e => setTitle(e.target.value)}
				type='text'
				placeholder='add'
			/>
			<button onClick={handleClick}>Add todo</button>
		</div>
	)
}

export default React.memo(AddTodo)
