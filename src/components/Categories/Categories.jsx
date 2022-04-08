import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../redux/actions/categories'
const Categories = () => {
	const dispatch = useDispatch()
	return (
		<div className='max-w-7xl mx-auto my-10 text-2xl text-center'>
			<span className='inline-block mr-8 cursor-pointer'>All</span>
			<span  className='inline-block mr-8 cursor-pointer'>
				Completed
			</span>
			<span  className='inline-block cursor-pointer'>
				Nocompleted
			</span>
		</div>
	)
}

export default React.memo(Categories)
