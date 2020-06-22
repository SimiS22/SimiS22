import React from 'react'
import Bubble from '../Bubble/Bubble'
import './Navbar.scss'

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <Bubble />
            <div id="menuWrapper">
                {/* <div id="menu1" className="menuElement" onclick="move('1', '50px')"></div>
      <div id="menu2" className="menuElement" onclick="move('2', '150px')"></div>
      <div id="menu3" className="menuElement" onclick="move('3', '250px')"></div>
      <div id="menu4" className="menuElement" onclick="move('4', '350px')"></div> */}
            </div>
        </div>

    )
}
export default Navbar