import SlideOne from '/assets/seventh.jpg';
import SlideTwo from '/assets/slide2.png';
import SlideThree from '/assets/slide3.png';
import Button from "./Button"


function Slider() {
  return (
    <div className='py-[160px] px-[165px] flex justify-between items-center'>
      <img src={SlideOne} alt="slide" className='max-w-[540px]' />
      <div className='max-w-[445px]'>

        <div className='mb-20'>
            <h3 className='max-w-[445px] text-[48px] font-bold mb-5 text-secondary-EbonyClay leading-[1] tracking-[-0.5px]'>Family Gathering</h3>
            <p className='max-w-[445px] text-[20px] font-normal mb-[60px] text-secondary-EbonyClay leading-[1.5]'>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            <Button dark={false}>BOOK A TABLE</Button>
        </div>

        <div className='flex flex-col items-start gap-3'>
            <button className='text-[#4c4c4c] text-[17px] font-semibold leading-[1.65] tracking-[2.5px]'>FAMILY GATHERING</button>
            <button className='text-[#4c4c4c] text-[17px] font-semibold leading-[1.65] tracking-[2.5px] opacity-50'>SPECIAL EVENTS</button>
            <button className='text-[#4c4c4c] text-[17px] font-semibold leading-[1.65] tracking-[2.5px] opacity-50'>SOCIAL EVENTS</button>
        </div>
      </div>
    </div>
  )
}

export default Slider
