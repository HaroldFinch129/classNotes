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


import FunctionalComponent from './hooks/FunctionalComponent';
import ClassComponent from './hooks/ClassComponent';

function App() {
    return ( <
        div className = "App" >
        <
        ClassComponent / >
        <
        FunctionalComponent / >
        <
        /div>
    );
}

export default App;