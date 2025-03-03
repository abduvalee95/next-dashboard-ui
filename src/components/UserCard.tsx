import Image from 'next/image'

const UserCard = ({ type }: { type: string }) => {
	return (
		<div className='rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[135px]'>
			<div className='flex items-center justify-between'>
				<span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>
					2024/01
				</span>
				<Image src='/more.png' alt='more' width={14} height={14} />
			</div>
			<h1 className='text-2xl font-semibold my-4'>2.34325</h1>
			<h2 className='flex capitalize text-sl  font-medium text-gray-500 gap-3'>
				{type === 'student' && (
					<>
						<Image src='/student.png' alt='student' width={20} height={14} />
						<span>{type}</span>
					</>
				)}
				{type === 'teacher' && (
					<>
						<Image src='/teacher.png' alt='teacher' width={20} height={14} />
						<span>{type}</span>
					</>
				)}
				{type === 'parent' && (
					<>
						<Image src='/parent.png' alt='parent' width={22} height={14} />
						<span>{type}</span>
					</>
				)}
				{type === 'staff' && (
					<>
						<Image src='/lesson.png' alt='staff' width={20} height={14} />
						<span>{type}</span>
					</>
				)}
			</h2>
		</div>
	)
}

export default UserCard
