import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'

const AdminPage = () => {
	return (
		<div className='p-4 flex flex-col gap-4 flex-col md:flex-row'>
			{/* LEFT */}
			<div className='w-full lg:w-2/3 gap-8 flex flex-col'>
				{/* USER CARDS */}
				<div className='flex justify-between gap-4 flex-wrap'>
					<UserCard type='student' />
					<UserCard type='teacher' />
					<UserCard type='parent' />
					<UserCard type='staff' />
				</div>
				{/* MIDDLE Charts */}
				<div className='flex gap-4 flex-col lg:flex-row'>
					{/* Count Chart */}
					<div className='w-full lg:w-1/3 h-[450px]'>
						<CountChart />
					</div>
					{/* ATTENDANCE Chart */}
					<div className='w-full lg:w-2/3 h-[450px]'>
						<AttendanceChart />
					</div>
				</div>
				{/* Bottom Chart*/}
				<div className='w-full h-[500]'>
					<FinanceChart />
				</div>
			</div>
			{/* Right */}
			<div className='w-full lg:w-1/3 bg-white flex flex-col gap-8'>
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	)
}

export default AdminPage
