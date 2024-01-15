import quotes from '../assets/images/quotes.png'


export default function Review ({name, city, avatar, title, review,}) {
  return (
    <section className='ml-72 rounded-lg w-[1100px] bg-white mt-20 py-[70px] px-[110px] flex gap-14'>
      <div className=' w-[460px] text-center text-[#2E363E]'>
          <div className=''>
            <img src={quotes} alt="" />
          </div>
          <div className='text-left text-[#2E363E] pt-6'>
            <h1 className='font-medium text-3xl text-left pt-6'>{title}</h1>
            <p className='font-normal text-base pt-6 '>{review}</p>
          </div>
          <div className=' cursor-pointer w-[179px] text-left pt-6 text-[#4A94FF] text-sm font-normal relative'>
            <p className='border-b border-dashed'>
              Читать отзыв полностью
            </p>
          </div>
        </div>
        <div>
        <div className=''>
          <img src={avatar} alt="" className=''/>
        </div>
        <div className='pt-7 text-center'>
          <h2 className='font-medium text-xl text-[#2E363E]'>{name}</h2>
          <h3 className='font-normal text-base text-[#A6AEB6] pt-2'>{city}</h3>
        </div>
      </div>
    </section>
    
  )
}