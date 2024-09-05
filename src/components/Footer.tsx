import Logo from '../assets/logo-dine.png'

function Footer() {
  return (
    <div className='bg-primary-CodGray flex py-20 items-center px-[165px] justify-between'>
      <img src={Logo} alt="logo" className='w-[104px] h-10'/>
      <div>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>Marthwaite, Sedbergh</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>Cumbria</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>+00 44 123 4567</p>
      </div>
      <div>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>OPEN TIMES</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>MON - FRI: 09:00 AM - 10:00 PM</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>SAT - SUN: 09:00 AM - 11:30 PM</p>
      </div>
    </div>
  )
}

export default Footer
