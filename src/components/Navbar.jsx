 import { Link } from 'react-router-dom';
import '../style/Navbar.css'; // Import the CSS file

const Navbar = () => {
    
    return (
        <nav className="navbar">
             <div className="logoInst"><Link to="/" className="navLink">
                <img className='logoIconTwitter' src="data:image/png;base64,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" alt="" />
               </Link>
             </div>
            <ul className="navList">
                <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                <li className="navItem"><Link to="/explore" className="navLink">Explore</Link></li>
                <li className="navItem"><Link to="/notifications" className="navLink">Notifications</Link></li>
                <li className="navItem"><Link to="/messages" className="navLink">Messages</Link></li>
                <li className="navItem"><Link to="/groks" className="navLink">Groks</Link></li>
                <li className="navItem"><Link to="/communities" className="navLink">Communities</Link></li>
                <li className="navItem"><Link to="/profile" className="navLink">Profile</Link></li>


                {/* create */}

               
                <li className="navItem  more">
                    <button className="navLink">
                        <i className="fa fa-bell"></i>More
                    </button>
                </li>

                 <li className="navItem navIcon">
                    <button className="navLink">
                        <i className="fa fa-bell"></i>Post
                    </button>
                </li>

                 <li className="navItem">
                    <button className="navLink">
                        <i className="fa fa-bell"></i>N josue dev
                    </button>
                 </li>
                    
            </ul>
        </nav>
    );
}

export default Navbar;
