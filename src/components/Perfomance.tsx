'use client'
import Image from 'next/image'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
	{ name: 'Group A', value: 30, fill: '#8844de' },
	{ name: 'Group B', value: 30, fill: '#1883d8' },
	{ name: 'Group C', value: 40, fill: '#8184d8' },
]
const Perfomance = () => {
	return (
		<div className='p-4 bg-white rounded-md h-80 relative'>
			<div className='flex justify-between items-center'>
				<h1 className='text-xl font-semibold'>Perfomance</h1>
				<Image src='/moreDark.png' alt='' width={16} height={16} />
			</div>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart>
					<Pie
						dataKey='value'
						startAngle={180}
						endAngle={0}
						data={data}
						cx='50%'
						cy='50%'
						innerRadius={80}
					/>
				</PieChart>
			</ResponsiveContainer>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
				<h1 className='text-3xl font-bold'> 9.2</h1>
				<p className='text-xs text-gray-300'> of 10max score</p>
			</div>
			<div>
				<h1 className='absolute font-medium bottom-16 left-0 right-0 m-auto text-center'>1-semester = 2-semester score</h1>
			</div>
		</div>
	)
}

export default Perfomance
