'use client'
import Image from 'next/image'

import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const data = [
	{
		name: 'Mon',
		present: 40,
		absent: 60,
	},
	{
		name: 'Tue',
		present: 30,
		absent: 48,
	},
	{
		name: 'Wed',
		present: 50,
		absent: 33,
	},
	{
		name: 'Thu',
		present: 80,
		absent: 90,
	},
	{
		name: 'Fri',
		present: 60,
		absent: 80,
	},
]
const AttendanceChart = () => {
	return (
		<div className='bg-white rounded-lg p-4 h-full '>
			<div className='flex justify-between items-center'>
				<h1 className='text-lg font-semibold'> Attendance </h1>
				<Image src='/moreDark.png' alt='' width={10} height={10} />
			</div>
			<ResponsiveContainer width='100%' height='90%'>
				<BarChart
					width={500}
					height={300}
					data={data}
					barSize={20}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
					<XAxis
						dataKey='name'
						axisLine={false}
						tick={{ fill: '#d1d5db' }}
						tickLine={false}
					/>
					<YAxis axisLine={false} />
					<Tooltip
						contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
					/>
					<Legend
						align='left'
						verticalAlign='top'
						wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
					/>
					<Bar
						dataKey='present'
						fill='#C3EBFA'
						legendType='circle'
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						dataKey='absent'
						fill='#CFCEFF'
						legendType='circle'
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default AttendanceChart
