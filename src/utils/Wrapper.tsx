import React from 'react'

interface Children{
    children:React.ReactNode,
}

const Wrapper = ({children}:Children) => {
  return (
    <div className='max-w-[1200px] mx-auto pb-10 px-4'>
        {children}
    </div>
  )
}

export default Wrapper