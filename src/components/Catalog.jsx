import ButtonList from './Button/ButtonList'

export default function Catalog ({ img, title, description }) {
  return (
    
      <div>
        
        <div className='w-[350px] rounded-lg font-Montserrat'>
          <img src={img} alt="" />
          <div className=' text-2xl mt-12 font-bold text-[#2E363E]  ml-11'>
            {title}
          </div>
          <div className='text-base mt-3 font-normal text-[#2E363E]  ml-11'>
            {description}
          </div>
          <div className=' mt-6  text-[#2E363E] ml-11'>
            <p className='text-2xl font-medium'>150 ₽/шт. </p>
          </div>
          <ButtonList />
        </div>

      </div>
  )
}