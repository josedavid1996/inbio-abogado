import NextImage from 'next/image'
import { Progressbar } from '@components/others/progressbar'
export const About = () => {
    return (
        <section className='bg-[#171A1D] flex flex-col md:flex-row p-6 gap-4 py-10'>

            <div className='w-full md:w-1/2 flex items-center justify-center border '>
                <div>
                    <NextImage
                        src='/images/personabout.png'
                        // className='absolute w-full h-full object-cover'
                        // objectFit='cover'
                        // layout='fill'
                        width={450}
                        height={550}
                    />
                </div>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center border'>
                <div>
                    <h4 className='text-white'>About Me</h4>
                    <p className='text-[#999187]'>
                        In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia veniam enim sit culpa velit proident enim ea officia aute non in mollit culpa anim magna sit veniam irure eiusmod.
                    </p>
                    <div className='mt-5'>
                        <div>
                            <h4 className='text-white text-[16px] font-medium'>Bussiness Layer</h4>
                            <Progressbar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
