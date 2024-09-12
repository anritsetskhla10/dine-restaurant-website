import Form from '../components/Form'; 
import Footer from '../components/Footer';
import Logo from '/assets/logo-dine.png';

function Booking() {
  return (
    <div>
      <div className='pt-[67px] pb-[153px] px-[165px] bg-BookingImg bg-center bg-cover bg-no-repeat'>
        <img src={Logo} alt="logo" className='w-[104px] h-10 mb-[154px]' />
        <h2 className='max-w-[507px] text-[80px] font-thin mb-4 text-[#ffffff] leading-[1] tracking-[-1px]'>Reservations</h2>
        <p className='max-w-[445px] text-[20px] font-normal text-[#ffffff] leading-[1.5]'>
          We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
        </p>
      </div>
      <div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
