import Form from '../components/Form'; 
import Footer from '../components/Footer';
import Logo from '/assets/logo-dine.png';

function Booking() {
  return (
    <div className='relative'>
      <div className='pt-[67px] pb-[153px] px-[165px] bg-BookingImg bg-center bg-cover bg-no-repeat'>
        <img src={Logo} alt="logo" className='w-[104px] h-10 mb-[154px]' />
        <h2 className='max-w-[507px] text-[80px] font-thin mb-4 text-[#ffffff] leading-[1] tracking-[-1px]'>Reservations</h2>
        <p className='max-w-[445px] text-[20px] font-normal text-[#ffffff] leading-[1.5]'>
          We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
        </p>
      </div>
      <div className='h-[320px] w-full bg-white'>
          <div className='absolute top-[258px] right-[165px] translate-x-[-20%] z-30'>
            <Form />
          </div>
          <div className='w-full h-full relative'>
            <div className='w-full max-w-[160px] flex flex-col gap-2 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-90%] z-10'>
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
