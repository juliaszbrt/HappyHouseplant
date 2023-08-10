'use client';
import Marquee from 'react-fast-marquee';

const Names = () => {
  return (
    <div className="flex items-center h-[2rem] bg-[rgb(52,73,44)] lg:h-[4rem]">
      <Marquee speed={60}>
        <p className="lg:text-[1.5rem] font-bold tracking-[3px] whitespace-nowrap text-[#8C9C87] align-middle">
          WEEPING FIG&nbsp;&nbsp;IVY&nbsp;&nbsp;POTHOS&nbsp;&nbsp;MONSTERA&nbsp;&nbsp;DIEFFENBACHIA&nbsp;&nbsp;JADE&nbsp;&nbsp;ALOCASIA&nbsp;&nbsp;YUCCA&nbsp;&nbsp;CALATHEA&nbsp;&nbsp;SUCCULENT&nbsp;&nbsp;ALOE&nbsp;&nbsp;
        </p>
      </Marquee>
    </div>
  )
}

export default Names