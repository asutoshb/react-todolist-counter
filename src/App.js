

import './App.css';
import Counter from './components/Counter'
import Todos from './components/Todos'


function App() {


  return (
      <div className="App">
       <Counter initValue={0} />
       <Todos />
      </div>
  );
}

export default App;

// React.createElement('button', {
//   onClick: handleClick()
// }, "add 1")



// function App() {
//   // return (
//   //   <div className="App">
//   //     <Counter age={23} name="test" initValue={"0"}/>
//   //   </div>
//   // );
// }


