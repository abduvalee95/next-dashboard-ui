import Image from 'next/image'

const Navbar = () => {
	return (
		<div className='flex item-center justify-between p-4'>
			{/* Search Bar */}
			<div className='hidden md:flex items-center bg-white rounded-full ring-[1.5px] ring-gray-200 px-2'>
				<Image src='/search.png' alt='search' width={14} height={14} />
				<input
					type='text'
					placeholder='Search...'
					className='bg-transparent border-none w-[200px] p-2 outline-none'
				/>
			</div>
			{/* Icons and User */}
			<div className='flex items-center gap-6 w-full justify-end'>
				<div className='flex items-center justify-center w-7 h-7 bg-white rounded-full cursor-pointer'>
					<Image src='/message.png' alt='message' width={20} height={20} />
				</div>
				<div className='flex items-center justify-center  w-7 h-7 bg-white rounded-full cursor-pointer relative'>
					<Image src='/announcement.png' alt='announcement' width={20} height={20} />
					<div className='absolute -top-3 -right-3 w-5 h-5 flex item-center justify-center bg-purple-500 text-white rounded-full text-[14px]'>10</div>
					</div>
					<div className='flex flex-col'>
						<span className='text-xs leading-3 font-medium'>Leo Leon</span>
						<span className='text-[10px] text-gray-500 text-right'>Admin</span>
				</div>
				<Image src='/avatar.png' alt='user' width={36} height={36} className='rounded-full' />
			</div>
		</div>
	)
}

export default Navbar
