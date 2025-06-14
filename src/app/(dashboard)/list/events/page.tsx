import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { eventsData, role } from '@/lib/data'
import { event } from '@/lib/types/event'
import Image from 'next/image'

const columns = [
	{
		header: 'Title',
		accessor: 'title',
	},
	{
		header: 'Class',
		accessor: 'class',
	},
	{
		header: 'Date',
		accessor: 'date',
	},
	{
		header: 'Start Time',
		accessor: 'start time',
	},
	{
		header: 'End Time',
		accessor: 'end time',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},
]
const EventListpage = () => {
	const renderRow = (item: event) => (
		<tr
			key={item.id}
			className='border-b border-gray-400 even:bg-slate-50 text-sm hover:bg-purpleLight'
		>
			<td className='flex items-center gap-4 p-4'>{item.title}</td>
			<td className='hidden md:table-cell'>{item?.class}</td>
			<td className='hidden md:table-cell'>{item?.date}</td>
			<td className='hidden md:table-cell'>{item?.startTime}</td>
			<td className='hidden md:table-cell'>{item?.endTime}</td>
			<td>
				<div className='flex items-center gap-2'>
					{role === 'admin' && (
						<>
							<FormModal table='event' type='update' data={item} />
							<FormModal table='event' type='delete' id={item.id} />
						</>
					)}
				</div>
			</td>
		</tr>
	)
	return (
		<div className='bg-white flex-1 rounded-md p-4 m-4 mt-0'>
			{/* TOP */}
			<div className='flex justify-between items-center'>
				<h1 className='hidden md:block font-semibold text-lg'>Events</h1>
				<div className='flex  md:flex-row  flex-col items-center w-full gap-4 md:w-auto'>
					<TableSearch />
					<div className='flex items-center gap-4 self-end'>
						<button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/filter.png' alt='' width={14} height={14} />
						</button>
						<button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/sort.png' alt='' width={14} height={14} />
						</button>
						{role === 'admin' && <FormModal table='event' type='create' />}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={eventsData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	)
}

export default EventListpage
