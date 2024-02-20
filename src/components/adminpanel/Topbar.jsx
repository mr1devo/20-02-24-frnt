import { useNavigate } from 'react-router-dom';
import './Topbar.css'
import './home.css'


const Topbar = (props) => {
  const navigate = useNavigate();
  const savedata = ()=>{
    console.log("clicked")
     navigate('/Login')
  }
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">
            FOUND IT !
          </span>
        </div>
       
        <div className='topright'>
          
          <button onClick={savedata}>Log Out</button>
         
        </div>

      </div>
    </div>
  )
}

export default Topbar