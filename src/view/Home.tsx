import Logo from '/assets/logo-dine.png';
import BGFirst from '/assets/first.png';
import SecondImg from '/assets/second.png';
import ThirdImg from '/assets/third.png';
import FourthImg from '/assets/fourth.png';
import Fifthmg from '/assets/fifth.png';
import SixthImg from '/assets/sixthth.png';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Slider from '../components/Slider';


function Home() {

  return (
    <div>
      <div className='bg-[#111111] pt-16 pl-[165px] pb-[248px] relative'>
        <img src={Logo} alt="logo" className='w-[104px] h-10 ' />
        <div className='mt-[100px] relative z-20'>
          <h1 className='w-[507px] text-[80px] font-thin mb-4 text-[#ffffff] leading-[1] tracking-[-1px] z-20'>Exquisite dining 
          since 1989
          </h1>
          <p className='w-[445px] text-[20px] font-normal mb-6 text-[#ffffff] leading-[1.5] z-20'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <Button dark={true}>BOOK A TABLE</Button>
        </div>
          <img src={BGFirst} alt="bg image" className=' h-full absolute right-0 top-0 z-0'/>
      </div>

      <div className='flex justify-between items-center mt-[-70px] px-[165px] relative top-30'>
        <img src={SecondImg} alt="second image"  />
        <div className='flex flex-col gap-8'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px]'>Enjoyable place for all the family</h3>
          <p className='w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] '>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>

      <div>
        <div>
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px]'>The most locally sourced food</h3>
          <p className='w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] '>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
        </div>
        <img src={ThirdImg} alt="third img" />
      </div>

      <div>
          <div>
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px]'>The most locally sourced food</h3>
          <p className='w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] '>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
          </div>
          <div>
            <div className='border-b'>
              <img src={FourthImg} alt="fourth img" />
              <div>
                <h5>Seared Salmon Fillet</h5>
                <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>  
            </div>
            <div className='border-b'>
              <img src="" alt="" />
              <div>
                <h5>Rosemary Filet Mignon</h5>
                <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>  
            </div>
            <div className='border-b'>
              <img src="" alt="" />
              <div>
                <h5>Summer Fruit Chocolate Mousse</h5>
                <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>  
            </div>
          </div>
      </div>

      <Slider/>
      <div>
        <h2>Ready to make a reservation?</h2>
        <Button dark={false}>BOOK A TABLE</Button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
