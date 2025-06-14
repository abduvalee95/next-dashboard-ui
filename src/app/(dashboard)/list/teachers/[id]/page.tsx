import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import FormModal from '@/components/FormModal'
import Perfomance from '@/components/Perfomance'
import { id } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

const SingleTeacherPage = () => {
	return (
		<div className='flex p-4 flex-1 flex-col gap-4 xl:flex-row'>
			{/* Left */}
			<div className='w-full xl:w-2/3'>
				{/* TOP */}
				<div className='flex flex-col lg:flex-row gap-4 '>
					{/* USER CARD  */}
					<div className='flex flex-1 gap-4 bg-sky py-6 px-4 rounded-md'>
						<div className='w-1/3 '>
							<Image
								src='/profile.png'
								alt=''
								width={135}
								height={135}
								className='w-36  h-36 rounded-full object-cover'
							/>
						</div>
						<div className='w-2/3 flex flex-col justify-between gap-4'>
						<div className='flex items-center gap-4'>
							<h1 className='text-xl font-semibold'> Leonardo Decabrio </h1>
							<FormModal
								table='teacher'
								type='update'
								data={{
									id: '1',
									name: 'Leonardo',
									lastname: 'Decabrio',
									email: 'dsf@dsfs.ds',
									phone: '+996 553 44-23-32',
									bloodType: 'A+',
									address: 'Bishkek, Kyrgyzstan',
									birthDate: '1998-01-25',
								}}
							/>
							</div>
							<p className='text-sm text-gray-500'>
								Lorem ipsum dolor sit amet consectetur adipisicing eli{' '}
							</p>
							<div className='flex items-center gap-2 justify-between flex-wrap text-xs font-medium'>
								<div className='w-full md:w-1/3 flex items-center gap-2'>
									<Image src='/blood.png' alt='' width={15} height={15} />
									<span>A+</span>
								</div>
								<div className='w-full md:w-1/3 flex items-center gap-2'>
									<Image src='/date.png' alt='' width={15} height={15} />
									<span>January 25</span>
								</div>
								<div className='w-full md:w-1/3 flex items-center gap-2'>
									<Image src='/mail.png' alt='' width={15} height={15} />
									<span>alee@mail.com</span>
								</div>
								<div className='w-full md:w-1/3 flex items-center gap-2'>
									<Image src='/phone.png' alt='' width={15} height={15} />
									<span>+996 553 44-23-32</span>
								</div>
							</div>
						</div>
					</div>
					{/* SMALL CARD */}
					<div className='flex flex-1 gap-4 justify-between flex-wrap'>
						{/* CARD 1 */}
						<div className='bg-white p-4 flex gap-4 rounded-md w-full  md:w-[48%] 2xl:w-[48%] xl:w-[45%]'>
							<Image
								src='/singleAttendance.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>90%</h1>
								<span className='text-sm text-gray-400'>Attendance</span>
							</div>
						</div>
						{/* CARD 2 */}
						<div className='bg-white p-4 flex gap-4 rounded-md w-full  md:w-[48%] 2xl:w-[48%] xl:w-[45%]'>
							<Image
								src='/singleBranch.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>85%</h1>
								<span className='text-sm text-gray-400'>Performance</span>
							</div>
						</div>
						{/* CARD 3 */}
						<div className='bg-white p-4 flex gap-4 rounded-md w-full  md:w-[48%] 2xl:w-[48%] xl:w-[45%]'>
							<Image
								src='/singleLesson.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>5 Years</h1>
								<span className='text-sm text-gray-400'>Experience</span>
							</div>
						</div>
						{/* CARD 4 */}
						<div className='bg-white p-4 flex gap-4 rounded-md w-full  md:w-[48%] 2xl:w-[48%] xl:w-[45%] '>
							<Image
								src='/singleClass.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>5</h1>
								<span className='text-sm text-gray-400'>Subjects</span>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM */}
				<div className='mt-4 bg-white p-4 h-[800px]'>
					<h1> Teacher&apos;s Scheudele </h1>
					<BigCalendar />
				</div>
			</div>
			{/* Right */}
			<div className='w-full xl:w-1/3 flex flex-col gap-4'>
				<div className='bg-white p-4 rounded-md'>
					<h1 className='text-xl font-semibold'> Schortcuts</h1>
					<div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-550'>
						<Link className='p-3 rounded-md bg-purple' href='/teacher'>
							{' '}
							Teacher&apos;s
						</Link>
						<Link className='p-3 rounded-md bg-sky' href='/list/students'>
							{' '}
							Student&apos;s
						</Link>
						<Link className='p-3 rounded-md bg-blue-50' href='/list/parents'>
							{' '}
							Parent&apos;s
						</Link>
						<Link className='p-3 rounded-md bg-yellow' href='/list/subjects'>
							{' '}
							Subject&apos;s
						</Link>
						<Link className='p-3 rounded-md bg-pink-50' href='/list/lessons'>
							{' '}
							Lesson&apos;s
						</Link>
					</div>
				</div>
				<Perfomance />
				<Announcements />
			</div>
		</div>
	)
}

export default SingleTeacherPage
