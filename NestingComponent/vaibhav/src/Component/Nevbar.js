  import{NavLink} from 'react-router-dom'
  function BBB() {
     return(
        <>
         <ul className='navbar'>
            <li><NavLink to="/" className="navbarlist">HOME</NavLink></li>
            <li><NavLink to="/about" className="navbarlist">ABOUT</NavLink></li>
            <li><NavLink to="/contect" className="navbarlist">CONTECT</NavLink></li>
         </ul>

        </>
     )
  }
  export default BBB;