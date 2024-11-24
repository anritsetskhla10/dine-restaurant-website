import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '/assets/logo-dine.png';
import BGFirst from '/assets/first.png';
import BGFirstTablet from '/assets/first-tablet.png';
import SecondImg from '/assets/second.png';
import ThirdImg from '/assets/third.png';
import FourthImg from '/assets/fourth.png';
import FifthImg from '/assets/fifth.png';  
import SixthImg from '/assets/sixth.png';
import MobileFourthImg from '/assets/mobile-one.jpg';
import MobileFifthImg from '/assets/mobile-two.jpg';  
import MobileSixthImg from '/assets/mobile-three.jpg'; 
import Button from '../components/Button';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

function Home() {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(BGFirst);
  const [fourthImage, setFourthImage] = useState(FourthImg);
  const [fifthImage, setFifthImage] = useState(FifthImg);
  const [sixthImage, setSixthImage] = useState(SixthImg);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
  
      if (windowWidth <= 420) {
        setFourthImage(MobileFourthImg);
        setFifthImage(MobileFifthImg);
        setSixthImage(MobileSixthImg);
      } else if (windowWidth <= 1340) {  
        setBgImage(BGFirstTablet);    
      } else {
        setFourthImage(FourthImg);
        setFifthImage(FifthImg);
        setSixthImage(SixthImg);
        setBgImage(BGFirst);
      }
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <div>
      <div className='bg-[#111111] pt-16 pl-[165px] pb-[248px] relative  
      max-xl1340:flex max-xl1340:flex-col max-xl1340:pl-0 max-xl1340:pt-0'>
        <div className=' relative z-20 max-xl1340:order-2 max-xl1340:flex max-xl1340:flex-col max-xl1340:items-center'>
        <img src={Logo} alt="logo" className='w-[104px] mb-20 h-10 relative z-50 ' />
          <h1 className='max-w-[507px] text-[80px] font-thin mb-4 text-[#ffffff] leading-[1] tracking-[-1px] z-20 
          max-xl1340:text-center max-xl:text-[48px] max-xl:leading-[1.5] max-sm::text-[32px] max-sm:leading-[1.25] max-sm:tracking-[-0.4px]'>
            Exquisite dining since 1989
          </h1>
          <p className='max-w-[445px] text-[20px] font-normal mb-6 text-[#ffffff] leading-[1.5] max-sm:leading-[1.63] z-20 max-xl1340:text-center'>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
          </p>
          <Button dark={true} onClick={handleBookingClick}>BOOK A TABLE</Button>
        </div>
        <img src={bgImage} alt="bg image" className='h-full absolute right-0 top-0 z-0 max-xl1340:relative  max-xl1340:w-full max-xl1340:order-1'/>
      </div>

      <div className='flex justify-between items-center mt-[-70px] px-[165px] relative z-30
      max-xl1340:flex-col max-xl1340:gap-4 max-xl1340:px-[98px]  max-sm:px-6'>

        <img src={SecondImg} alt="second image" />
        <div className='flex flex-col gap-8 max-xl1340:items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='max-w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px] 
          max-xl1340:text-center max-sm:text-[32px]'>Enjoyable place for all the family</h3>
          <p className='max-w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] max-xl:text-center'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>

      <div className='flex justify-between items-center mt-12 mb-10 xl1340:mb-[-40px] px-[165px] relative z-30 
      max-xl1340:gap-10 max-xl1340:flex-col max-xl1340:px-[98px] max-sm:px-6'>

        <div className='max-xl1340:order-2 flex flex-col  gap-8 max-xl1340:items-center '>
        <div className='flex items-center gap-2 '>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='max-w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px]
          max-xl1340:text-center'>The most locally sourced food</h3>
          <p className='max-w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] max-xl1340:text-center'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
        </div>
        <img src={ThirdImg} alt="third img" className='max-xl:order-1 '/>
      </div>

      <div className=' pt-[200px] pb-[128px] px-[165px] bg-primary-CodGray flex items-center justify-between max-xl1340:pt-[150px]  max-xl1340:pb-[100px]
      max-xl1340:flex-col max-xl1340:items-center max-xl1340:gap-[54px]  max-xl1340:px-10 max-sm:px-6 max-sm:pt-[75px] max-sm:pb-[75px]'>
         
          <div className='flex flex-col gap-8 max-xl1340:items-center'>
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='max-w-[445px] text-[48px] font-bold text-[#ffffff] leading-[1] tracking-[-0.5px] 
          max-xl1340:text-center max-sm:text-[32px] max-sm:leading-[1.25] max-sm:tracking-[-0.4px]'>A few highlights from our menu</h3>
          <p className='max-w-[445px] text-[20px] font-normal  text-[#ffffff] leading-[1.5] 
          max-xl1340:text-center max-sm:text-[16px] max-sm:leading-[1.63]'>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
          </div>

          <div className='flex flex-col gap-6 max-sm:items-center'>
            <div className='border-b flex items-center gap-14 max-w-[540px] max-sm:flex-col max-sm:gap-7 max-sm:max-w-[327px]'>
              <img src={fourthImage} alt="fourth img" className='mb-6 min-w-[327px]' />
              <div className='max-xl:mb-6 max-sm:max-w-[327px]'>
                <h5 className='mb-3 text-[20px] font-bold  text-[#ffffff] leading-[1.2] tracking-[-0.25px] max-sm:text-center'>Seared Salmon Fillet</h5>
                <p className='text-[16px] font-normal  text-[#ffffff] leading-[1.63] max-sm:text-center'>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>  
            </div>
            <div className='border-b flex items-center gap-14 max-w-[540px] max-sm:flex-col max-sm:gap-7 max-sm:max-w-[327px]'>
              <img src={fifthImage} alt="fifth image" className='mb-6 min-w-[327px]' />
              <div className='max-xl:mb-6 max-sm:max-w-[327px]'>
                <h5 className='mb-3 text-[20px] font-bold  text-[#ffffff] leading-[1.2] tracking-[-0.25px] max-sm:text-center'>Rosemary Filet Mignon</h5>
                <p className='text-[16px] font-normal  text-[#ffffff] leading-[1.63] max-sm:text-center'>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>  
            </div>
            <div className='border-b flex items-center gap-14 max-w-[540px] max-sm:flex-col max-sm:gap-7 max-sm:max-w-[327px]'>
              <img src={sixthImage} alt="sixth img" className='mb-6 min-w-[327px]'/>
              <div className='max-xl:mb-6 max-sm:max-w-[327px]'>
                <h5 className='mb-3 text-[20px] font-bold  text-[#ffffff] leading-[1.2] tracking-[-0.25px] max-sm:text-center'>Summer Fruit Chocolate Mousse</h5>
                <p className='text-[16px] font-normal  text-[#ffffff] leading-[1.63] max-sm:text-center'>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>  
            </div>
          </div>
      </div>
      <Slider handleBookingClick={handleBookingClick} />
      <Footer/>
    </div>
  );
}

export default Home;
