import './Hero.css'

const Hero = (props) => { 
    return (
        <div className="hero-container">
            <div className="cta">
                <h1 className='text-white'>👋 HEY, THERE!</h1>
                <h1 className="display">TROUBLE MAKING YOUR OWN WEBSITE?</h1>
                <button className="btn green bs-black">GET HELP</button>
            </div>
            <div className="playground">
                <div className="webpage">
                    <div className="option-row">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="url-bar">
                        www.zeki.in | click and drag to make your own website
                    </div>
                    <div className="play-area"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
