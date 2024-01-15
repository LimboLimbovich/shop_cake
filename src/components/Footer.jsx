import topSky from '../assets/images/05 1.png'
import Button from './Button/Button'
import { FaPhone } from "react-icons/fa6"
import berryRight from '../assets/images/berry.png'
import berryLeft from '../assets/images/berry2.png'
import leafRight from '../assets/images/leafFooter.png'
import leafLeft from '../assets/images/leafFooter2.png'


export default function Footer () {
  return (
    <footer className='relative'>
      <img src={topSky} alt="" />
      <div className='absolute bottom-20 left-40'>
        <img src={berryRight} alt="" />
      </div>
      <div className='absolute right-32 top-32 z-10'>
        <img src={berryLeft} alt="" />
      </div>
      <div className='absolute left-52 top-40 z-10'>
        <img src={leafRight} alt="" />
      </div>
      <div className='absolute right-24 bottom-20 z-10'>
        <img src={leafLeft} alt="" />
      </div>
      <div>
        <form className=' relative rounded-lg left-80 w-[1100px] bg-white px-[99px] py-[70px]'>
          <div className='text-center font-Montserrat text-[#2E363E]'>
          <h1 className='font-bold text-4xl'>Чтобы сделать заказ, укажите ваш телефон</h1>
          <p className='font-normal text-xl pt-3'>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
          </div>
          <div className='flex justify-center items-center gap-5 mt-9'>
          <div className='relative mt-5 '>
            <input type="text" placeholder='Номер телефона' className=' text-base font-normal font-Montserrat w-[465px] h-[94px] bg-[#F2F6FA] pl-16 border-2 border-[#F2F6FA] rounded-lg' />
          <FaPhone className='absolute fill-[#929AA2] bottom-[38px] left-10'/>
          </div>
            <Button>Сделать заказ</Button>
          </div>

          <div className='mt-6 flex justify-center'>
            <input type="checkbox" className='cursor-pointer'/>
            <label htmlFor="" className='font-Montserrat text-xs font-normal text-[#7E868E]'>Нажимая на кнопку, вы соглашаетесь с <a href=""><span className='text-[#7E868E] underline'>условиями обработки персональных данных</span></a></label>
          </div>
        </form>
      </div>
      
      <div className='relative w-[800px] text-[#7E868E] left-[450px] pt-20 font-normal font-Montserrat text-xs'>
        <div className='flex justify-evenly gap-[43px]'>
          <p className=' cursor-pointer'>Согласие на обработку данных</p>
          <p className=' cursor-pointer'>Служба поддержки</p>
          <p className=' cursor-pointer'>Политика конфиденциальности</p>
        </div>
        <p className='pt-6 pb-20 text-center cursor-pointer'>© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</p>
      </div>
    </footer>
  )
}