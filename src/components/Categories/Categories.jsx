import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../redux/actions/categories'
const Categories = () => {
	const dispatch = useDispatch()
	const onCategoryClick = (category) => {
		return () => {
			dispatch(setCategory(category))
		}
	}
	return (
		<div className='max-w-7xl mx-auto my-10 text-2xl text-center'>
			<span
				onClick={onCategoryClick('all')}
				className='inline-block mr-8 cursor-pointer'
			>
				All
			</span>
			<span
				onClick={onCategoryClick('completed')}
				className='inline-block mr-8 cursor-pointer'
			>
				Completed
			</span>
			<span
				onClick={onCategoryClick('uncompleted')}
				className='inline-block cursor-pointer'
			>
				Uncompleted
			</span>
		</div>
	)
}

export default React.memo(Categories)
