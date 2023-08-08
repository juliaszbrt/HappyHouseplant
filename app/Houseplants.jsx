import Image from "next/image";

import React from 'react'

const Houseplants = () => {
  return (
    <div className="relative h-[17rem] lg:h-[30rem]">
        <Image fill sizes='100vw' src='/houseplants.png' className="object-cover"></Image>
    </div>
  )
}

export default Houseplants