import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role } from '@/lib/data'
import { Parent } from '@/lib/types/parent'
import Image from 'next/image'
import Link from 'next/link'

const columns = [
	{
		header: 'Info',
		accessor: 'info',
	},
	{
		header: 'Student Names',
		accessor: 'students',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Phone',
		accessor: 'phone',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Address',
		accessor: 'address',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},
]
const ParentsListpage = () => {
	const renderRow = (item: Parent) => (
		<tr
			key={item.id}
			className='border-b border-gray-400 even:bg-slate-50 text-sm hover:bg-purpleLight'
		>
			<td className='flex items-center gap-4 p-4'>
				<div className='flex flex-col'>
					<h3 className='font-semibold'>{item.name}</h3>
					<p className='text-xs text-gray-400'>{item?.email}</p>
				</div>
			</td>
			<td className='hidden md:table-cell'> {item.students.join(',')}</td>
			<td className='hidden md:table-cell'> {item.phone}</td>
			<td className='hidden md:table-cell'> {item.address}</td>
			<td>
				<div className='flex items-center gap-2'>
					<Link href={`/list/teachers/${item.id}`}>
						<button className='w-7 h-7 flex items-center justify-center rounded-full bg-sky'>
							<Image src='/view.png' alt='' width={16} height={16} />
						</button>
					</Link>
					{role === 'admin' && (
						<FormModal table='parent' type='delete' id={item.id} />
					)}
				</div>
			</td>
		</tr>
	)
	return (
		<div className='bg-white flex-1 rounded-md p-4 m-4 mt-0'>
			{/* TOP */}
			<div className='flex justify-between items-center'>
				<h1 className='hidden md:block font-semibold text-lg'>All Students</h1>
				<div className='flex  md:flex-row  flex-col items-center w-full gap-4 md:w-auto'>
					<TableSearch />
					<div className='flex items-center gap-4 self-end'>
						<button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/filter.png' alt='' width={14} height={14} />
						</button>
						<button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/sort.png' alt='' width={14} height={14} />
						</button>
						{role === 'admin' && (
							/* <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
							<Image src='/plus.png' alt='' width={14} height={14} />
						</button> */
							<FormModal table='parent' type='create' />
						)}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={parentsData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	)
}

export default ParentsListpage
