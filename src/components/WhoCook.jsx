import Button from "./Button/Button";
import ButtonTitle from "./Button/ButtonTitle";
import woman from '../assets/images/woman.png'
import name from '../assets/images/Name.png'


export default function WhoCook() {
  return (
    <div className="flex font-Montserrat">
      <div className='text-white ml-80 pt-20'>
        <ButtonTitle>Кто будет готовить?</ButtonTitle>
        <div className='font-medium text-5xl mt-6 text-[#2E363E]'>
          <p>Лично приготовлю <br /> и все красиво упакую <br /> для вашего события</p>
        </div>
        <div className="text-lg text-black font-normal py-4 mt-6 relative">
          <div className="flex items-center pt-9">
            <div className="w-[10px] h-[10px] rounded-full bg-[#5D6AFB] absolute bottom-[220px]"></div>
            <p className="ml-3 text-[#2E363E] text-xl font-normal pl-4">Проконсультирую по выбору капкейков <br />и придумаю нестандартную идею</p>
          </div>
          <div className="flex items-center pt-7">
            <div className="w-[10px] h-[10px] rounded-full bg-[#5D6AFB] absolute bottom-[137px]"></div>
            <p className="ml-3 text-[#2E363E] text-xl font-normal pl-4">Приготовлю капкейки для вашего события, <br />которые обязательно всем понравятся </p>
          </div>
          <div className="flex items-center pt-7">
            <div className="w-[10px] h-[10px] rounded-full bg-[#5D6AFB] absolute bottom-[53px]"></div>
            <p className="ml-3 text-[#2E363E] text-xl font-normal pl-4">Аккуратно и красиво всё упакую, если <br />вы хотите сделать приятный подарок</p>
          </div>
        </div>
        <Button>Задать вопрос Юлии</Button>
      </div>

      <div className="relative ml-20  ">
        <img src={woman} alt="" className=""/>
        <img src={name} alt="" className="absolute right-96 bottom-40"/> 
      </div>
    </div>
  );
}