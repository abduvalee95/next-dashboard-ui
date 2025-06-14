import React from 'react'
import { FieldError } from 'react-hook-form'

type InputFieldProps = {
	label: string
	type?: string
	register: any
	name: string
	defaultValue?: string
	error?: FieldError
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

function InputField({
	label,
	type = 'text',
	register,
	name,
	defaultValue,
	error,
	inputProps,
}: InputFieldProps) {
	return (
		<div className='flex flex-col gap-2 w-full md:w-1/4'>
			<label className='text-sm font-medium text-gray-500'>{label}</label>
			<input
				type={type}
				{...register(name)}
				className='ring-[1.5] ring-gray-700 p-2 rounded-md text-sm w-full'
				{...inputProps}
				defaultValue={defaultValue}
			/>{' '}
			{error?.message && (
				<p className='text-xs text-red-400'> {error?.message.toString()}</p>
			)}
		</div>
	)
}

export default InputField
