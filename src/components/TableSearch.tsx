import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
	return (
		<div className='w-full  flex  md:w-auto items-center bg-white rounded-full ring-[1.5px] ring-gray-200 px-2'>
						<Image src='/search.png' alt='search' width={14} height={14} />
						<input
							type='text'
							placeholder='Search...'
							className='bg-transparent border-none w-[200px] p-2 outline-none'
						/>
					</div>
	)
}

export default TableSearch