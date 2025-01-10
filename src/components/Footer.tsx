import Logo from '/assets/logo-dine.png'

function Footer() {
  
  return (
    <div className='bg-primary-CodGray flex py-20 items-center px-[165px] justify-between max-xl1340:flex-col max-xl1340:gap-5 
    max-xl1340:px-[98px] max-sm:px-6'>
      <img src={Logo} alt="logo" className='w-[104px] h-10'/>
      <div>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>Marthwaite, Sedbergh</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>Cumbria</p>
        <a  href="tel:+995598348189"
        className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff]'>+00 44 123 4567</a>
      </div>
      <div>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff] max-xl1340:text-center'>OPEN TIMES</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff] whitespace-nowrap'>MON - FRI: 09:00AM - 10:00PM</p>
        <p className='text-[14px] font-normal
        leading-[2] tracking-[2px] text-[#ffffff] whitespace-nowrap'>SAT - SUN: 09:00AM - 11:30PM</p>
      </div>
    </div>
  )
}

export default Footer
