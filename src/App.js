import { useState } from 'react';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  const [dark , setDark] = useState(false);
  console.log(dark);
  return (
    <div className={dark ? 'dark' : ""}>
      <div className="dark:bg-slate-900 dark:text-slate-300 h-full font-primary ">
      <Header setDark={setDark}/>
      <Main/>
      <Footer/>
      </div>
    </div>
  )
}

export default App;
