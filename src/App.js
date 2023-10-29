import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';
// function changecolor(){
   
//   const[titles,setTitle] = useState(
//     [{title:"Am Udhayavanan"},
//     { title : "this is my first react app"},
//     { title : "Hello world"}]
//   );

// }



function App() {

  const [count, setCount] = useState(0);
  const [textcolor, setTextColor] = useState("black"); 
  const [content, setContent] = useState("I Am udhayavanan,"); 
  useEffect(() => { 
  
        //Implementing the setInterval method 
        const colors=["red","pink","green"];
        const contentist=["I Am udhayavanan,","This is my react learning exercise","Let me say ", "hello react"];
        const interval = setInterval(() => { 
            
            setCount(count + 1); 
            let ind=Math.floor(Math.random() * 3);
            setTextColor(colors[ind]);
            setContent(contentist[count%4]);
        }, 1000); 
  
        //Clearing the interval 
        return () => clearInterval(interval); 
    }, [count]); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:textcolor}} > {content} </p>
      </header>
    </div>
  );
}

export default App;
