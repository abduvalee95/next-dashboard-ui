import React from 'react'

const Announcements = () => {
	return (
		<div className='bg-white p-4 rounden-md'>
			<div className='flex items-center justify-between'>
				<h1 className='font-semibold text-xl'>Announcement</h1>
				<span className='text-xs'> View All</span>
			</div>
			<div className='flex flex-col gap-4 mt-4'>
			<div className='bg-skyLight rounded-md  p-4'>
				<div className='flex items-center justify-between'>
					<h1 className='font-medium'> Lorem, ipsum dolor sit </h1>
					<span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025.04.08</span>
				</div>
				<p className='text-sm mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores nostrum sequi</p>
			</div>
			<div className='bg-yellow rounded-md  p-4'>
				<div className='flex items-center justify-between'>
					<h1 className='font-medium'> Lorem, ipsum dolor sit </h1>
					<span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025.04.08</span>
				</div>
				<p className='text-sm mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores nostrum sequi</p>
			</div>
			<div className='bg-purple rounded-md  p-4'>
				<div className='flex items-center justify-between'>
					<h1 className='font-medium'> Lorem, ipsum dolor sit </h1>
					<span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025.04.08</span>
				</div>
				<p className='text-sm mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores nostrum sequi</p>
			</div>
			</div>
			</div>
	)
}

export default Announcements