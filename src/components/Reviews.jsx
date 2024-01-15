import topSky from '../assets/images/03 1.png'
import bottomSky from '../assets/images/04 1.png'
// import quotes from '../assets/images/quotes.png'
// import avatar from '../assets/images/reviewsAvatar.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import BtnArrows from './Button/BtnArrows';
import berry from '../assets/images/berry.png'
import leaf from '../assets/images/leafReviews.png'
import Review from './Review';
import { reviews } from '../reviewData';


export default function Reviews () {
  return (
    <div className='font-Montserrat'>
      <div>
        <img src={topSky} alt="" />
      </div>
      <h1 className=' font-medium text-5xl text-white text-center'>Почитайте отзывы довольных клиентов</h1>
      <div className='ml-72 relative'>
        <div className='absolute -left-56 -top-44'>
          <img src={leaf} alt="" />
        </div>
        <div className='absolute right-40 -top-10'>
            <img src={berry} alt="" />
        </div>
      
      </div>
      
          {reviews.map((review) => (
                <Review key={review.id} {...review}/>
              ))}
        <div className='flex justify-center items-center gap-5 pt-[70px] pb-6'>
          <BtnArrows><IoIosArrowBack/></BtnArrows>
          <BtnArrows><IoIosArrowForward/></BtnArrows>

        </div>
        <img src={bottomSky} alt="" />
    </div>
  )
}