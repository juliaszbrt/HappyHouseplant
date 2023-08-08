import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-[2rem] lg:gap-[10rem] justify-center items-center h-[24rem] sm:h-[20rem] bg-[#ffeee3]">
            <div className="flex gap-[25px] md:gap-0 justify-center items-center pt-[1.5rem] px-[2rem] md:p-0">
                <div className="shrink-0 w-[8.5rem]">
                  <p className="text-[#34492C] text-center text-[0.8rem] mb-[0.5rem] tracking-[2.5px] font-black">Cactus</p>
                  <p className="text-[#34492C] text-center text-[0.8rem] tracking-[2.5px]">lorem ipsum dolor sit amet</p>
                </div>
                <Image width={2048} height={2048} src='/cactus.png' className="object-contain h-[8.5rem] w-[8.5rem] md:h-[15rem] md:w-[15rem]"></Image>
            </div>
            <div className="flex gap-[25px] justify-center items-center pb-[1.5rem] px-[2rem] md:p-0">
                <div className="shrink-0 w-[6rem]">
                  <p className="text-[#34492C] text-center text-[0.8rem] mb-[0.5rem] tracking-[2.5px] font-black">Pothos</p>
                  <p className="text-[#34492C] text-center text-[0.8rem] tracking-[2.5px]">Keep out of direct sunlight</p>
                </div>
                <Image width={2048} height={2048} src='/pothos.png' className="object-contain h-[8.5rem] w-[8.5rem] md:h-[14rem] md:w-[14rem]"></Image>
            </div>
        </div>
    </div>
  )
}

export default Section2