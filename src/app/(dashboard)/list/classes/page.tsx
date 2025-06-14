import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { classesData, role } from '@/lib/data'
import { Classes } from '@/lib/types/classes'
import Image from 'next/image'
import Link from 'next/link'

const columns = [
	{
		header: 'Class Name',
		accessor: 'name',
	},
	{
		header: 'Grade',
		accessor: 'grade',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Capacity',
		accessor: 'capacity',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Supervisor',
		accessor: 'supervisor',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},
]
const ClassesListpage = () => {
	const renderRow = (item: Classes) => (
		<tr
			key={item.id}
			className='border-b border-gray-400 even:bg-slate-50 text-sm hover:bg-purpleLight'
		>
			<td className='flex items-center gap-4 p-4'>{item.name}</td>
			<td className='hidden md:table-cell'>{item?.grade}</td>
			<td className='hidden md:table-cell'>{item?.capacity}</td>
			<td className='hidden md:table-cell'>{item?.supervisor}</td>
			<td>
				<div className='flex items-center gap-2'>
					<Link href={`/list/teachers/${item.id}`}>
						<button className='w-7 h-7 flex items-center justify-center rounded-full bg-sky'>
							<Image src='/view.png' alt='' width={16} height={16} />
						</button>
					</Link>
					{role === 'admin' && (
						<FormModal table='class' type='delete' id={item.id} />
					)}
				</div>
			</td>
		</tr>
	)
	return (
		<div className='bg-white flex-1 rounded-md p-4 m-4 mt-0'>
			{/* TOP */}
			<div className='flex justify-between items-center'>
				<h1 className='hidden md:block font-semibold text-lg'>All Classes</h1>
				<div className='flex  md:flex-row  flex-col items-center w-full gap-4 md:w-auto'>
					<TableSearch />
					<div className='flex items-center gap-4 self-end'>
						<button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/filter.png' alt='' width={14} height={14} />
						</button>
						<button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/sort.png' alt='' width={14} height={14} />
						</button>
						{role === 'admin' && <FormModal table='class' type='create' />}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={classesData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	)
}

export default ClassesListpage
