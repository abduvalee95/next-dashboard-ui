'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
/* import TeacherForm from './form/TeacherForm'
import StudentForm from './form/StudentForm' */
const TeacherForm = dynamic(() => import('./form/TeacherForm'), {
	loading: () => <h1 className='bg-blue-300'>Loading...</h1>,
})
const StudentForm = dynamic(() => import('./form/StudentForm'), {
	loading: () => <h1 className='bg-blue-300 '>Loading...</h1>,
})

const forms: {
	[key: string]: (type: 'create' | 'update', data?: any) => JSX.Element
} = {
	teacher: (type, data) => <TeacherForm type={type} data={data} />,
	student: (type, data) => <StudentForm type={type} data={data} />,
	parent: (type, data) => <StudentForm type={type} data={data} />,
}

const FormModal = ({
	table,
	type,
	data,
	id,
}: {
	table:
		| 'teacher'
		| 'student'
		| 'parent'
		| 'class'
		| 'subject'
		| 'lesson'
		| 'branch'
		| 'exam'
		| 'result'
		| 'assignment'
		| 'attendance'
		| 'event'
		| 'announcement'
	type: 'create' | 'update' | 'delete'
	data?: any
	id?: string | number
}) => {
	const size = type === 'create' ? 'h-8 w-8 ' : ' w-7 h-7 '
	const color =
		type === 'create' ? 'bg-yellow' : type === 'update' ? 'bg-sky' : 'bg-purple'
	const icon =
		type === 'create'
			? '/plus.png'
			: type === 'update'
			? '/update.png'
			: '/delete.png'

	const [open, setOpen] = useState(false)

	const Form = () => {
		return type === 'delete' && id ? (
			<form action='' className='p-4 flex flex-col gap-4'>
				<span className='text-center font-medium'>
					All data will be lost. Are you sure you want delete this {table} ?{' '}
				</span>
				<button className='bg-red-500 text-white rounded-md p-2 px-4 border-none  w-max self-center'>
					Delete
				</button>
			</form>
		) : type === 'update' || type === 'create' ? (
			forms[table](type, data)
		) : (
			'Form not found'
		)
	}
	return (
		<>
			<button
				className={`${size}flex items-center justify-center rounded-full ${color}`}
				onClick={() => setOpen(true)}
			>
				<Image src={icon} alt='' width={16} height={16} />
			</button>
			{open && (
				<div className='w-screen h-screen absolute top-0 left-0 bg-black/50 flex items-center justify-center'>
					<div className=' relative w-full max-w-md rounded-lg bg-white p-4 w-[90%] md:w-[70%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] '>
						<Form />
						<div className='absolute top-2 right-2 cursor-pointer'>
							<Image
								src='/close.png'
								alt=''
								width={10}
								height={10}
								onClick={() => setOpen(false)}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default FormModal
