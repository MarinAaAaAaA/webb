import React from 'react';
import Promo from './components/Promo'
import Header from './components/Header'
import Footer from './components/Footer'
import Сourses from './components/Сourses'
import Scroll from './components/Scroll'
import Classes from './components/Classes'
import Programms from './components/Programms'
import { Routes ,Route } from 'react-router-dom';

function App() {

    
    return (
        <div className='App'>            
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Promo></Promo>}/>
                <Route exact path="/courses" element={<Сourses></Сourses>}/>
                <Route exact path="/classes" element={<Classes></Classes>}/>
                <Route exact path="/programms" element={<Programms></Programms>}/>
            </Routes>
            <Scroll></Scroll>
            <Footer></Footer>
        </div>
    );
}

export default App;