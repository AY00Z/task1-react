import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainArticle from './components/MainArticle';
import Article from './components/Article';



function App() {
  return (
    
  <div>

    <div className='navb'><Navbar/></div> <br/><br/>

    <div className='surdeux'>
      <div className='main'> <MainArticle/></div>
      <div className='betoul'>
      <div className='more'><Article title="How to make an apple pie" paragraphe="these are the ingredients you need ...See more"/></div>
      <div className='more'><Article title="Article 2" paragraphe="gdhejzhedgausahjskhauisga ...See more"/></div>
    </div>
    </div>


    </div>
  )
}

export default App;
