import {React ,useState} from 'react';
import logo from '../../assets/logo.svg'
import './navbar.css'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
    <div className='gpt3__navbar section__padding '>
      <div className="gpt3__navbar-logo">
          <img src={logo} alt="" />
      </div>
      <div className="gpt3__navbar-list">
        <ul className='gpt3__navbar-listItems'>
          <li>Home</li>
          <li>What Is GPT3?</li>
          <li>Open Ai</li>
          <li>Case Studies</li>
          <li>Library</li>
        </ul>
      </div>
      <div className="gpt3__navbar-register">
        <button className='gpt3__navbar-register_signin'>Sign in</button>
        <button className='gpt3__navbar-register_signup'>Sign up</button>
      </div>
      <div className='gpt3__navbar-smallscreen'>
      <AiOutlineMenu onClick={() => setToggleMenu(!toggleMenu)} className='gpt3__navbar-menu' color='#fff' fontSize={27} style={{cursor:'pointer'}}/>
      {toggleMenu&&(
              <div className="gpt3__navbar-smallscreen-list" style={{display:'block'}}>
              <ul className='gpt3__navbar-smallscreen-listItmes'>
                <li>Home</li>
                <li>What Is GPT3?</li>
                <li>Open Ai</li>
                <li>Case Studies</li>
                <li>Library</li>
              </ul>
              <AiOutlineClose onClick={() => setToggleMenu(false)} className='gpt3__navbar-smallscreen-close'/>
            </div>
      
      )}

      </div>
    </div>  
  );
};

export default Navbar;
