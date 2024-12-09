import { Link } from 'react-router-dom';
import Form from '../components/Form'; 
import Footer from '../components/Footer';
import Logo from '/assets/logo-dine.png';

function Booking() {
  return (
    <div>
      <div className='pt-[67px] pb-[153px] px-[165px] bg-BookingImg bg-center bg-cover bg-no-repeat 
      max-xl1340:flex max-xl1340:flex-col max-xl1340:items-center max-xl1340:px-10 max-sm:px-6'>
        <Link to="/">
          <img src={Logo} alt="logo" className='w-[104px] h-10 mb-[154px] max-xl1340:mb-[120px]' />
        </Link>
        <h2 className='max-w-[507px] text-[80px] font-thin mb-4 text-[#ffffff] leading-[1] tracking-[-1px]
        max-xl:text-[48px] max-xl:leading-[1.33] max-xl:tracking-[-0.6px]  max-sm:text-[32px] max-sm::leading-[1.25] max-sm:tracking-[-0.4px]'>
          Reservations
        </h2>
        <p className='max-w-[445px] text-[20px] font-normal text-[#ffffff] leading-[1.5] max-xl1340:text-center  max-sm:text-[16px] max-sm::leading-[1.63]'>
          We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
        </p>
      </div>
      <div className='h-[450px] w-full bg-white relative flex items-center justify-center 
      max-xl1340:h-[580px] max-xl1340:flex max-sm:h-[640px]'>
          <div className='absolute top-[-358px] right-[165px] translate-x-[-8%] z-30 
          max-xl1340:top-[-80px] max-xl1340:translate-x-[50%] max-xl1340:right-[50%]'>
            <Form />
          </div>
          <div className='w-full h-full relative max-xl1340:hidden'>
            <div className='w-full max-w-[160px] flex flex-col gap-2 absolute top-[50%] left-[50%] 
            translate-y-[-50%] translate-x-[-90%] z-10'>
                <hr className='h-[6px] w-full bg-primary-Beaver'/>
                <hr className='h-[6px] w-full bg-primary-Beaver'/>
                <hr className='h-[6px] w-full bg-primary-Beaver'/>
                <hr className='h-[6px] w-full bg-primary-Beaver'/>
                <hr className='h-[6px] w-full bg-primary-Beaver'/>
            </div>
            <div className='w-full max-w-[75%] h-full bg-[#5c6779] opacity-[0.08] rounded-br-[60%] absolute z-0'>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;