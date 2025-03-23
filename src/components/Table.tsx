const Table = ({
	columns,
	renderRow,
	data,
}: {
	columns: { header: string; accessor: string; className?: string }[];
	renderRow: (item: any) => React.ReactNode
	data: any[]
}) => {
	return (
		<table className='w-full mt-2'>
			<thead>
				<tr className='text-left text-gray-400 text-sm'>
					{columns.map(col => (
						<th key={col.accessor} className={`px-3 py-2 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${col.className}`}>
							{col.header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>{data.map(item => renderRow(item))}</tbody>
		</table>
	)
}

export default Table
