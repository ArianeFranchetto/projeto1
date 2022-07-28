import  Header from './components/Header';
import  Footer from './components/Footer';
import  { useState } from 'react';

const App = ()  => {

  const [age, setAge] = useState(90);

  const [name, setName] = useState('ariane')

  const [bg, setBg] = useState('blue');
  
const handleClick = () => {
  setBg('red');
}

const handle20 = () => {
  setAge(20);

}

const handle90 = () => {
  setAge(90);
}

  return (
    <div style={{backgroundColor: bg}}>
<Header name={name} age={age}/>

<button onClick={handleClick}>Clique aqui!</button>

<button onClick={handle20}> Tenho 20 anos!</button>

<button onClick={handle90}> Tenho 90 anos!</button>
...

<Footer/>

    </div>
  )

}

export default App;