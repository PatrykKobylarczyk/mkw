import React from 'react'
import ScrollDownIcon from './ScrollDownIcon'

const SectionLogo = () => {
  return (
    <section className='relative w-full h-[620px] bg-blue-500 flex flex-col items-center justify-center'>
      <h1 className='text-8xl font-bold'>MK</h1>
      <p className='font-light'>Monika Kujawa - Adwokat</p>
      <p className='font-light'>Magdalena Kopera - Radca Prawny</p>
      <div className='absolute bottom-10 left-1/2 -translate-x-1/1 '>
        <ScrollDownIcon/>
      </div>
    </section>
  )
}

export default SectionLogo
