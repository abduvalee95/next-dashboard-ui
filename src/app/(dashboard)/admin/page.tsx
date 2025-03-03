import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
	return (
		<div className='p-4 flex flex-col gap-4 flex-col md:flex-row'>
			{/* LEFT */}
			<div className='w-full lg:w-2/3'>
			{/* USER CARDS */}
			<div className='flex justify-between gap-4 flex-wrap'>
			<UserCard type='student'/>
			<UserCard type='teacher'/>
			<UserCard type='parent'/>
			<UserCard type='staff'/>
			</div>
			</div>
			{/* Right */}
			<div className='w-full lg:w-1/3 bg-black'>r</div>

		</div>
	)
}

export default AdminPage