

const HighlightToSlide = () => {

    const hightlight = ["Fast Learner","Team Work","Team Leader","Curious"]

  return (
    <ul className="flex min-w-fit gap-[100px] font-heads animate-slide-left flex-nowrap ">
        {hightlight.map((data,index)=>{
            return <li key={index} className="capitalize text-4xl max-sm:text-2xl text-nowrap">
                {`**${data}**`}
            </li>
        })}
    </ul>
  )
}

export default HighlightToSlide