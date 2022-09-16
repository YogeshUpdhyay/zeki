import './Navbar.css'

const Navbar = (props) => { 
    return (
        <div className='navbar'>
            <div className="logo">
                
            </div>
            <div className="nav-group">
                <div className="nav-item">About</div>
                <div className="nav-item">Projects</div>
                <div className="nav-item">Milestones</div>
                <div className="nav-item">Reviews</div>
                <div className="nav-item">Clients</div>
            </div>

            <div className="nav-group">
                <div className="nav-item">
                    <img src="image.png" alt="phone"/>
                </div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
            </div>
            
            <div className="menu">
                <i className='hamburger'></i>
            </div>
        </div>
    )
}

export default Navbar
