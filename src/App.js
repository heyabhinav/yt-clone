import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Filter from './components/Filter/Filter';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <>
      <Header/>
      <div style={{display:'grid', gridTemplateColumns:'16% 82%', gap: '10px'}}>
        <div><Sidebar/></div>
        <div>
          <div style={{display:'block',backgroundColor:"transparent", height:'2.2em'}}><Filter/></div>
          <div style={{display:'block',backgroundColor:"transparent"}}><Videos/></div>
        </div>
      </div>
    </>
  );
}

export default App;
