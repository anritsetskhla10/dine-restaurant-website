import Logo from '../assets/logo-dine.png'
import Button from '../components/Button'
import Footer from '../components/Footer'


function Home() {

  return (
    <div>
      <div>
        <img src={Logo} alt="logo" className='w-[104px] h-10' />
        <div>
          <h1>Exquisite dining 
          since 1989
          </h1>
          <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <Button>BOOK A TABLE</Button>
        </div>

        <Footer/>
      </div>


    </div>
  )
}

export default Home
