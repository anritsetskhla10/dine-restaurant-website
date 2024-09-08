import SlideOne from '/assets/seventh.png';
import SlideTwo from '/assets/slide2.png';
import SlideThree from '/assets/slide3.png';
import Button from "./Button"


function Slider() {
  return (
    <div>
      <img src="" alt="" />
      <div>

        <div>
            <h3>Family Gathering</h3>
            <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            <Button dark={true}>BOOK A TABLE</Button>
        </div>

        <div>
            <button>FAMILY GATHERING</button>
            <button>SPECIAL EVENTS</button>
            <button>SOCIAL EVENTS</button>
        </div>
      </div>
    </div>
  )
}

export default Slider
