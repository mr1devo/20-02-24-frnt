import React from 'react'
import './home.css'
import Layout from './Layout';
import Topbar from './Topbar';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FOUND IT !
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Home = (props) => {
  return (
    
    <Layout xxx={props.checkLogout}/>
    
  )
}

export default Home



{/* <OutlinedCard></OutlinedCard> */}
     
     {/* <h1 className='wel'> Welcome to Admin Panel</h1> */}

     {/* <Sidebar/> */} 
     