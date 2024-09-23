import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '/assets/logo-dine.png';
import BGFirst from '/assets/first.png';
import BGFirstTablet from '/assets/first-tablet.png';
import SecondImg from '/assets/second.png';
import ThirdImg from '/assets/third.png';
import TabletSecondImg from '/assets/tablet-second.png';
import TabletThirdImg from '/assets/tablet-third.png';
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
      } else if (windowWidth <= 1280) {  
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
      max-xl:flex max-xl:flex-col max-xl:pl-0 max-xl:pt-0'>
        <div className=' relative z-20 max-xl:order-2 max-xl:flex max-xl:flex-col max-xl:items-center'>
        <img src={Logo} alt="logo" className='w-[104px] mb-20 h-10 relative z-50 ' />
          <h1 className='max-w-[507px] text-[80px] font-thin mb-4 text-[#ffffff] leading-[1] tracking-[-1px] z-20 max-xl:text-center'>
            Exquisite dining since 1989
          </h1>
          <p className='max-w-[445px] text-[20px] font-normal mb-6 text-[#ffffff] leading-[1.5] z-20 max-xl:text-center'>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
          </p>
          <Button dark={true} onClick={handleBookingClick}>BOOK A TABLE</Button>
        </div>
        <img src={bgImage} alt="bg image" className='h-full absolute right-0 top-0 z-0 max-xl:relative  max-xl:w-full max-xl:order-1'/>
      </div>

      <div className='flex justify-between items-center mt-[-70px] px-[165px] relative z-30
      max-xl:flex-col'>
        <img src={SecondImg} alt="second image" className='max-xl:mb-[60px]'/>
        <div className='flex flex-col gap-8 max-xl:items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='max-w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px] max-xl:text-center'>Enjoyable place for all the family</h3>
          <p className='max-w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] max-xl:text-center'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>

      <div className='flex justify-between items-center mt-8 mb-[-70px] px-[165px] relative z-30 max-xl:flex-col 
      max-xl:mb-[118px]'>
        <div className='max-xl:order-2 max-xl:flex max-xl:flex-col  max-xl:gap-8 max-xl:items-center '>
        <div className='flex items-center gap-2 '>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='max-w-[445px] text-[48px] font-bold text-[#111111] leading-[1] tracking-[-0.5px]
          max-xl:text-center'>The most locally sourced food</h3>
          <p className='max-w-[445px] text-[20px] font-normal  text-[#111111] leading-[1.5] max-xl:text-center'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
        </div>
        <img src={ThirdImg} alt="third img" className='max-xl:order-1 max-xl:mb-[60px]'/>
      </div>

      <div className='flex justify-between max-xl:flex-col max-xl:items-center max-xl:gap-[54px]  pt-[200px] pb-[128px] px-[165px] bg-primary-CodGray '>
          <div className='flex flex-col gap-8 max-xl:items-center'>
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-[50%] border border-primary-Beaver'></div>
            <div className='w-14 h-[1px] bg-primary-Beaver'/>
          </div>
          <h3 className='max-w-[445px] text-[48px] font-bold text-[#ffffff] leading-[1] tracking-[-0.5px] max-xl:text-center'>The most locally sourced food</h3>
          <p className='max-w-[445px] text-[20px] font-normal  text-[#ffffff] leading-[1.5] max-xl:text-center'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='border-b flex items-center gap-14 max-w-[540px]'>
              <img src={fourthImage} alt="fourth img" className='mb-6' />
              <div className='max-xl:mb-6'>
                <h5 className=' text-[20px] font-bold  text-[#ffffff] leading-[1.2] tracking-[-0.25px] '>Seared Salmon Fillet</h5>
                <p className='text-[16px] font-normal  text-[#ffffff] leading-[1.63] '>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>  
            </div>
            <div className='border-b flex items-center gap-14 max-w-[540px]'>
              <img src={fifthImage} alt="fifth image" className='mb-6' />
              <div className='max-xl:mb-6'>
                <h5 className='text-[20px] font-bold  text-[#ffffff] leading-[1.2] tracking-[-0.25px]'>Rosemary Filet Mignon</h5>
                <p className='text-[16px] font-normal  text-[#ffffff] leading-[1.63] '>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>  
            </div>
            <div className='flex items-center gap-14 max-w-[540px]'>
              <img src={sixthImage} alt="sixth img" />
              <div>
                <h5 className='text-[20px] font-bold  text-[#ffffff] leading-[1.2] tracking-[-0.25px]'>Summer Fruit Chocolate Mousse</h5>
                <p className='text-[16px] font-normal  text-[#ffffff] leading-[1.63] '>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
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
