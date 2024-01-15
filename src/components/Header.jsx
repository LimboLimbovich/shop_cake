
import bg from '../assets/images/bg.png'
import locationMark from '../assets/images/Icon.png'
import phoneIcon from '../assets/images/phone.png'
import Button from './Button/Button'
import ButtonTitle from './Button/ButtonTitle'
import BottomSky from '../assets/images/02 1.png'
import berry1 from '../assets/images/berryH1.png'
import berry2 from '../assets/images/berryH2.png'
import berry3 from '../assets/images/berryH3.png'
import leaf from '../assets/images/leafH.png'

export default function Header () { 


  return (
      <header className="min-h-screen bg-no-repeat font-Montserrat relative" style={{backgroundImage: `url(${bg})`}}>
        <div className='absolute top-40'>
          <img src={berry1} alt="" />
          </div>
        <div className='absolute right-0 top-32'>
          <img src={berry2} alt="" />
          </div>
        <div className='absolute bottom-32 right-0'>
          <img src={berry3} alt="" />
          </div>
        <div className='absolute bottom-0'>
          <img src={leaf} alt="" />
          </div>
        <div className='flex text-white justify-around relative border-b-[1px] border-slate-800 '>
  
            <a href="#" className=' mx-16 my-8 py-3 text-base font-medium'>Сладкий сундук</a>
          

          <div className='flex space-x-16 my-8'>
            <div className='flex'>
              <div className='py-1 pr-2'>
                <img src={locationMark} alt="" />
              </div>
                <p>г. Санкт Петербург, <br /> ул. Куйбышева 31</p>
            </div>

            <div className='flex'>
              <div className='pb-1 pr-3'>
                <img src={phoneIcon} alt="" />
              </div>
              <div>
                <span className='font-bold text-xl '>8 (812) 844-95-49</span><br />
                  <p className='font-normal text-[13px]'>Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-white ml-72 my-40 '>
          <ButtonTitle>вкуснейшие</ButtonTitle>
          
          <div className='font-bold text-5xl mt-4'>
            <p>Пирожные и капкейки <br /> от 150 ₽/шт. C доставкой <br /> по Санкт Петербургу</p>
          </div>
            
          <div className='text-2xl font-normal py-4 mt-3'>
            <p>Приготовим за 3 часа в день заказа. <br /> Доставка на авто в холодильнике.</p>
          </div>
            

            <div className='flex items-center gap-6'> 
              <Button>Перейти в каталог</Button>
              <div className='font-normal tracking-wider text-base'>
                <p>9 различных <br /> видов на выбор</p>
              </div>
            </div>
        </div>
        <img src={BottomSky} alt="" />
      </header>
  )
}