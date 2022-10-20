import { FaBriefcase, FaUser, FaGavel } from 'react-icons/fa'
export const Services = () => (
    <section className="bg-[#171A1D] p-6  py-10 z-30">
        <h2 className="text-white text-[34px] font-semibold text-center mb-8">My Services</h2>
        <div className="flex flex-col lg:flex-row gap-4">
            <div className='flex flex-col gap-3'>
                <div><FaBriefcase className='w-10 h-10 text-[#AD8E6D]' /></div>
                <div className='text-white text-[22px] font-semibold'>Commercial Services</div>
                <div>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</div>
            </div>
            <div className='flex flex-col gap-3'>
                 <div><FaUser className='w-10 h-10 text-[#AD8E6D]' /></div>
                 <div className='text-white text-[22px] font-semibold'>Employment Services</div>
                <div>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</div>
            </div>
            <div className='flex flex-col gap-3'>
                <div><FaGavel className='w-10 h-10 text-[#AD8E6D]' /></div>
                <div className='text-white text-[22px] font-semibold'>Civil Litigation</div>
                <div>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</div>
            </div>
        </div>
    </section>
)
