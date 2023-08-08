import Image from 'next/image'

const Banner = () => {
  return (
    <div>

        <div className="relative h-[12rem] sm:h-[30rem]">
            <div className="mx-[3rem] lg:mx-[9rem] absolute z-10 h-[12rem] sm:h-[30rem] flex items-center">
                <p className='break-normal text-[3rem] sm:text-[7.2rem] lg:text-[9rem] leading-snug text-[#ffeee3] font-black tracking-[9px] lg:tracking-[15px]'>GROW SOME <br/> GREENS.</p>
            </div>
            <Image fill sizes='z-0 100vw' src="/monstera.jpg" alt="monstera plant" className="object-cover"></Image>
        </div>

    </div>
  )
}

export default Banner