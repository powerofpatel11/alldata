import {Link, Outlet} from 'react-router-dom'
function GGG() {
return(
    <>
      <h1>My Contect</h1> 
      <h2>
      <p>This Is Contect Page</p>
      <p>WE Are Group Of Developer</p>
       </h2>
       <div className='namelist'> 
       <Link to="Company">Compony</Link>
       <Link to="Channel">Channel</Link>
       <Link to="Other">Other</Link>
       </div>
       <Outlet/>

    </>
)
}
export default GGG;