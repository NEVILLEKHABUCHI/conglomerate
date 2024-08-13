import React, {useState} from 'react';
import Home from './Home';
import About from './About';

export default function App(){
    return <AppContainer/>
}

function AppContainer(){
    const [showHeaderButtons,setShowHeaderButtons]=useState(false);
    const [currentPage,setCurrrentPage]=useState('Home');
    const handlePageChange=(page)=>{
        setCurrrentPage(page);
    }
    return(
        <div className='appContainer'>
            <ContainerTop showHeaderButtons={showHeaderButtons} setShowHeaderButtons={setShowHeaderButtons} onPageChange={handlePageChange} currentPage={currentPage}/>
            <ContainerBody setShowHeaderButtons={setShowHeaderButtons} currentPage={currentPage}/>
        </div>
    )
}

// Components for containerTop
function ContainerTop({showHeaderButtons,setShowHeaderButtons,onPageChange,currentPage}){
    const handleClick=()=>{
        setShowHeaderButtons(!showHeaderButtons);
    }
    return(
        <header>
            <div className="logo">
                <img src='logo.jpg' alt='conglomerate'/>
            </div>
            <HeaderButtons show={showHeaderButtons} onPageChange={onPageChange} currentPage={currentPage}/>
            <div className="phoneButton">
                <button onClick={handleClick}>
                <i className={showHeaderButtons?'fa fa-times' : 'fa fa-bars'}></i>
                </button>
            </div>
        </header>
    )
}
function HeaderButtons({show,onPageChange,currentPage}){
    return(
        <div className={`headerButtons ${show ? 'show' : 'hide'}`}>
                <button className={`${currentPage==='Home'? 'active':''}`} onClick={()=>onPageChange('Home')}>Home</button>
                <button className={`${currentPage==='About'? 'active':''}`} onClick={()=>onPageChange('About')}>About us</button>
                <button className={`${currentPage==='Services'? 'active':''}`} onClick={()=>onPageChange('Services')}>Our Services</button>
                <button className={`${currentPage==='Faq'? 'active':''}`} onClick={()=>onPageChange('Faq')}>Faq</button>
                <button className={`${currentPage==='Contact'? 'active':''}`} onClick={()=>onPageChange('Contact')}>Contact Us</button>
                <button className={`${currentPage==='Appointment'? 'active':''}`} onClick={()=>onPageChange('Appointment')}>Book Appointment</button>
            </div>
    )
}

// Components for containerBody
function ContainerBody({currentPage}){
   switch(currentPage){
    case 'Home':
        return <Home/>
        case 'About':
            return <About/>
            default: 
            return <Home/>
   }
}
