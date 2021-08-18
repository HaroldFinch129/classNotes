// life-cycling---------

// import './App.css';
// import Counter from './commitfiles/Counter';

// function App() {
  
//   return (
//     <div className="App">
//      <h2>My Counter</h2>
//      <Counter/>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import FunctionalComponent from './hooks/FunctionalComponent';
import ClassComponent from './hooks/ClassComponent';

function App() {
  const [isVisible, setVisibile] = useState(true);
  return (
    <div className="App">
      <button onClick= {()=> setVisibile(!isVisible)}>Toggle</button>
      {true && <ClassComponent/>}
      {isVisible ? <FunctionalComponent/> : null}
      
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}
    </div>
  );
}

export default App;