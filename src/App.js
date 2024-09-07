import React, {useState} from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';

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
            <HeaderButtons 
                show={showHeaderButtons} 
                onPageChange={onPageChange} 
                currentPage={currentPage} 
                setShowHeaderButtons={setShowHeaderButtons}
             />
            <div className="phoneButton">
                <button onClick={handleClick}>
                <i className={showHeaderButtons?'fa fa-times' : 'fa fa-bars'}></i>
                </button>
            </div>
        </header>
    )
}
function HeaderButtons({show,onPageChange,currentPage,setShowHeaderButtons}){
    const [isOpen,setIsOpen]=useState(false);
    const toggleLinks=()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div className={`headerButtons ${show ? 'show' : 'hide'}`}>
                <button
                    className={`${currentPage==='Home'? 'active':''}`} 
                    onClick={()=>{
                        onPageChange('Home');
                        setShowHeaderButtons(false);
                    }}>
                    Home
                </button>

                <button
                    className={`${currentPage==='About'?'active':''}`}
                    onClick={()=>{
                        onPageChange('About');
                        setShowHeaderButtons(false)
                    }}>
                    About us
                </button>

                <div className='serviceContent'>
                   <div className='serviceButtons'>
                        <button
                        className={`${currentPage==='Services'?'active':''}`}
                        onClick={()=>{
                            onPageChange('Services');
                            setShowHeaderButtons(false);
                        }}>
                            Our Services
                        </button>
                        <button onClick={toggleLinks}>
                        <i className={`fa-solid ${isOpen? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                   </div>
                    {isOpen && (
                        <div className='serviceLinks'>
                        <a href='#'>Civil Engineering</a>
                        <a href='#'>Software Engineering</a>
                        <a href='#'>Architecture</a>
                        <a href='#'>Music Production</a>
                        <a href='#'>Mechanical Engineering</a>
                    </div>
                    )}
                </div>
                <button 
                className={`${currentPage==='Faq'? 'active':''}`} 
                onClick={()=>{
                    onPageChange('Faq');
                    setShowHeaderButtons(false);
                }}>
                    Faq</button>
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

            case 'Services':
                return <Services/>

                    default: 
                        return <Home/>
   }
}
