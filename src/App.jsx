
import './App.css'
import Catalog from './components/Catalog'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Upload from './components/Upload'
import WhoCook from './components/WhoCook'
import Footer from './components/Footer'
import { lists } from './data'
import { images } from './data'
import Reviews from './components/Reviews'
import berry from './assets/images/berry4.png'
import leafLeft from './assets/images/leaf3.png'
import leafRight from './assets/images/leaf2.png'


function App() {
  

  return (
    <>
      <Header />
        <section className='bg-white relative'>
        <div className='absolute left-32 top-52'>
            <img src={berry} alt="" />
            </div>
          <div className='absolute bottom-96 left-36'>
            <img src={leafLeft} alt="" />
            </div>
          <div className='absolute bottom-[665px] right-32   '>
            <img src={leafRight} alt="" />
            </div>
          <p className=" font-medium text-5xl text-[#2E363E] text-center">Для любых событий и дорогих вам людей </p>
            <section className=' w-max max-w-[1100px] px-0 py-[15px] m-auto mt-20'> 
              <div className='w-max grid grid-cols-3 gap-5 '>
                {lists.map((list) => (
                  <Catalog key={list.id} {...list} />
                ))}
              </div>
            </section>
        </section>
            <Upload />
        <section className='bg-[white]'>
          <WhoCook />
        </section>

        <section>
        <Reviews/>
        </section>

        <section className='bg-white'>
          <h1 className='font-medium text-5xl text-[#2E363E] text-center'>Сделали более 3.000 заказов за 2 года</h1>
          <p className='font-normal text-2xl text-[#2E363E] text-center pt-4'>Посмотрите фото реальных заказов из нашего instagram</p>
          <section className=' w-[1684px] pt-40'>
            <div className='grid grid-cols-3 gap-2'>
              {images.map((img) => (
                <Gallery key={img.id} {...img}/>
              ))}
            </div>
          </section>
        </section>
          
      <Footer />
    </>
  )
}

export default App
