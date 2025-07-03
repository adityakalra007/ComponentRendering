import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './Components/LoginPage';
import { SignUpPage } from './Components/SignUpPage';


function App() {

 const[isLoggedIn,setLoggedIn] = useState(true);

 function changeState(){
      isLoggedIn == true ? setLoggedIn(false) : setLoggedIn(true);
 }

  if(isLoggedIn){
    
    return (
      <div className='relative'>
        <LoginPage></LoginPage> 
        <button
        onClick={changeState}
            type="submit"
            className='z-50 fixed right-4 top-4 sm:right-4 sm:top-4 
             text-xs sm:text-sm md:text-base 
             px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 
             bg-gradient-to-r from-violet-600 to-indigo-700 
             text-white font-semibold rounded-xl 
             shadow-md hover:scale-105 transition-transform'
>
            Change State
          </button>
         
      </div>

      
    
  )
   
  }
  else{
    return (
      <div className='relative'>
        <SignUpPage></SignUpPage> 
        <button
        onClick={changeState}
            type="submit"
          className='z-50 fixed right-4 top-4 sm:right-4 sm:top-4 
             text-xs sm:text-sm md:text-base 
             px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 
             bg-gradient-to-r from-violet-600 to-indigo-700 
             text-white font-semibold rounded-xl 
             shadow-md hover:scale-105 transition-transform'
>
            Change State
          </button>
      </div>
    
  )
  }
}

export default App
