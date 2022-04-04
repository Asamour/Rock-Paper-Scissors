
import './App.css';
import {useEffect, useState} from 'react';
import logo from './photo.jpg'; 
import logo1 from './thumb.png'; 





function App() {
  const choices= ['rock', 'paper', 'scissors'];
  const [choice, setChoice] = useState("")
  const [comChoice, setComChoice] = useState("")
  const [result, setResult] = useState(null)
  const [img, setImg]= useState(null)
  
  function ranString(arr) {
    let x= Math.floor(Math.random()*choices.length);
    return arr[x];
  }

function inputChoice(value) {
  setChoice(value);
}
  
function com() {
  setComChoice(ranString(choices));
}

  
  function checkResult (x, y) {
    let z= x + y
    console.log(z);
    switch(z) {
      case "rockscissors":
       
        setResult("You win");
        setImg(<img id="h4" src={logo}></img>)
        break;
      case "rockpaper":
      
      
        setResult("You lose");
        setImg(<img id="h4" src={logo1}></img>)
        break;
      case "rockrock":
        
      
        setResult("Tie");
        setImg("")
        break;
      case "scissorsrock":
        
      
        setResult("You lose");
        setImg(<img id="h4" src={logo1}></img>)
        break;
      case "scissorspaper":
        
        
          setResult("You win");
          setImg(<img id="h4" src={logo}></img>)
          break;
      case "scissorsscissors":
        
      
          setResult("Tie");
          setImg("")
          break;
      case "paperscissors":
        
        
          setResult("You lose");
          setImg(<img id="h4" src={logo1}></img>)
          break;
      case "paperrock":
        
      
        setResult("You win");
        setImg(<img id="h4" src={logo}></img>)
        break;
      case "paperpaper": 
       
        
        setResult("Tie");
        setImg("")
        break;
    
    
    
  }
}

useEffect(() => {
  checkResult(choice, comChoice)
}, [comChoice, choice]);

function execute(value) {
  inputChoice(value);
  com();
  checkResult(choice, comChoice)
  
  
  

}
  

   
   
   
  
  
  return (
  <>
  <head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  </style>
  </head>
  <div class= "flex-parent jc-center">
    <link rel="stylesheet" href="App.css"></link>
    
    <button id="rock" class="btn-primary"onClick = {(()=>execute('rock'))}>Rock</button><br></br>
    <button id= "paper" class="btn-primary"onClick = {(()=>execute("paper"))}>Paper</button>
    <button id="scissors" class="btn-primary" onClick =  {()=>execute('scissors')}>Scissors</button><br/>
  
  </div><br/><br/>
  
  <div class="parent" ><br/><br/>
    
    <h1 class="child" id="h1">You chose {choice}</h1><br/>
      <div class="clear"></div>
    <h2 class="child" id="h2">Computer chose {comChoice}</h2><br/> 
      <div class="clear"></div>
    <h3 class="child" id="h3">{result}</h3>
      <div class="clear"></div>
    <h4>{img}</h4>
    
  </div>
  
  
  </>
    
      



    
   
    
  );
}

export default App;
