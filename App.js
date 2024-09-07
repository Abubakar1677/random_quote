import './App.css';
// import EBookHeader from './component/EBookHeader';
// import EBookContainer from './component/EBookContainer';
// import EBookFooter from './component/EBookFooter';
// import { useState } from 'react';
// import EbookHome from './component/EbookHome';
import { Quote } from './component/Quote';

function App() {
    
//  const [menuNav,setMenuNav] = useState(false);

//  const menuNavFunc =()=>{
//   setMenuNav(!menuNav)
 
 
    
    
  return (
      
       <div className="App">
      {/* <EbookHome/>
       <EBookHeader   setMenuNav={menuNavFunc}/> 
       <EBookContainer menu={menuNav} setMenuNav={menuNavFunc}/>
       <EBookFooter/> */}

       <Quote></Quote>

    </div>
    
   
  );
}

export default App;
