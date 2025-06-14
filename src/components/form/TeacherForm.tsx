'useclient'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputField from '../InputField'
import Image from 'next/image'

const schema = z.object({
	username: z
		.string()
		.min(3, { message: 'Username is required' })
		.max(15, { message: 'Username must be less than 15 characters' }),
	email: z.string().email({ message: 'Email is required' }),
	password: z.string().min(6, { message: 'Password is required' }),
	confirmPassword: z.string().min(6, { message: 'Password is required' }),
	firstName: z.string().min(3, { message: 'First name is required' }),
	lastName: z.string().min(3, { message: 'Last name is required' }),
	phone: z.string().min(10, { message: 'Phone number is required' }),
	address: z.string().min(3, { message: 'Address is required' }),
	bloodType: z.string().min(1, { message: 'Blood Type is required' }),
	birthDate: z.date({ message: 'Birth date is required' }),
	sex: z.enum(['male', 'female'], { message: 'is required' }),
	img: z.instanceof(File, {
		message: 'Image is required',
	}),
})

type Inputs = z.infer<typeof schema>
function TeacherForm({
	type,
	data,
}: {
	type: 'create' | 'update'
	data?: any
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) })

	const onSubmit = handleSubmit(data => {
		console.log(data)
	})
	return (
		<form className='flex flex-col gap-8' onSubmit={onSubmit}>
			<h1 className='text-xl font-semibold'>Create a new teacher</h1>
			<span className='text-xs text-gray-400 font-medium'>
				Authentication Information
			</span>
			<div className='flex flex-wrap gap-4 justify-between'>
				<InputField
					label='Username'
					type='text'
					register={register}
					name='username'
					defaultValue={data?.username}
					error={errors?.username}
				/>
				<InputField
					label='Email'
					type='email'
					register={register}
					name='email'
					defaultValue={data?.username}
					error={errors?.email}
				/>
				<InputField
					label='Password'
					type='password'
					register={register}
					name='password'
					defaultValue={data?.password}
					error={errors?.password}
				/>
			</div>
			<span className='text-xs text-gray-400 font-medium'>
				Personal Information
			</span>
			<div className='flex flex-wrap gap-4 justify-between'>
				<InputField
					label='Fist Name'
					type='text'
					register={register}
					name='firstName'
					defaultValue={data?.firstName}
					error={errors?.firstName}
				/>
				<InputField
					label='Last Name'
					type='text'
					register={register}
					name='lastName'
					defaultValue={data?.lastName}
					error={errors?.lastName}
				/>
				<InputField
					label='Phone'
					type='integer'
					register={register}
					name='phone'
					defaultValue={data?.phone}
					error={errors?.phone}
				/>
				<InputField
					label='Address'
					type='text'
					register={register}
					name='address'
					defaultValue={data?.adress}
					error={errors?.address}
				/>
				<InputField
					label='Blood Type'
					type='text'
					register={register}
					name='bloodType'
					defaultValue={data?.bloodType}
					error={errors?.bloodType}
				/>
				<InputField
					label='Birth Date'
					type='date'
					register={register}
					name='birthDate'
					defaultValue={data?.birthDate}
					error={errors?.birthDate}
				/>
				<div className='flex flex-col gap-2 w-full md:w-1/4'>
					<label className='text-sm font-medium text-gray-500'>Sex</label>
					<select
						className='ring-[1.5] ring-gray-700 p-2 rounded-md text-sm w-full'
						{...register('sex')}
						defaultValue={data?.sex}
					>
						<option value={'male'}> Male</option>
						<option value={'female'}>Female</option>
					</select>
					{errors?.sex?.message && (
						<p className='text-xs text-red-400'>
							{errors?.sex?.message.toString()}
						</p>
					)}
					</div>
				<div className='flex flex-col gap-2 w-full md:w-1/4 justify-center '>
					<label className='text-xs font-medium text-gray-500 items-center gap-2  flex cursor-pointer' htmlFor='img'>
						<Image src={'/upload.png'} alt=''width={25} height={25} />
						<span> Upload Image</span>
					</label>
					<input 
						type='file'
						{...register('img')}
						id='img'
						className='ring-[1.5] ring-gray-700 p-2 rounded-md text-sm w-full hidden '
						defaultValue={data?.img}
						/>
					{errors?.img?.message && (
						<p className='text-xs text-red-400'>
							{errors?.img?.message.toString()}
						</p>
					)}
				</div>
			</div>
			<button className='bg-blue-300 text-white p-2 rounded-md'>
				{' '}
				{type === 'create' ? 'Create' : 'Update'}
			</button>
		</form>
	)
}

export default TeacherForm
