import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import SkewedTape from '../../components/SkewedTape/SkewedTape'

import './Landing.css'
import Work from '../../components/Work/Work';

const Landing = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            
            <Work />
        </>
    )
}

export default Landing
