import ButtonTitle from "./Button/ButtonTitle";
import Button from "./Button/Button";
import phone from '../assets/images/phoneUpload.png'
import topSky from '../assets/images/01 1.png'
import bottomSky from '../assets/images/02 1.png'
import leaf from '../assets/images/leaf3.png'
import berry from '../assets/images/berry3.png'

export default function Upload () {
  return (
    <section className="relative">
      <div>
        <img src={topSky} alt=""/>
      </div>
      <div className="absolute left-64 ">
        <img src={leaf} alt="" />
      </div>
      <div className="absolute right-16 top-52">
        <img src={berry} alt="" />
      </div>
      <div className="flex items-center font-Montserrat">
          <div className="w-6/12 h-2/5">
            <img src={phone} alt="" />
          </div>
          <div className='text-white ml-20 mb-64'>
            <ButtonTitle>Не нашли то что нужно?</ButtonTitle>
            
            <div className='font-medium text-5xl mt-6'>
              <p>Приготовим заказ <br /> любой сложности <br /> по фото или эскизу</p>
            </div>
              
            <div className='text-lg text-[#FFFFFF] font-normal py-4 mt-6'>
              <p>Загрузите фотографию или эскиз капкейков<br /> и мы рассчитаем стоимость за 30 минут</p>
            </div>
                <Button>Загрузить фотографию</Button>
          </div>
      </div>
      <div className="relative">
        <img src={bottomSky} alt="" className="absolute bottom-0" />
      </div>
    </section>
  )
}