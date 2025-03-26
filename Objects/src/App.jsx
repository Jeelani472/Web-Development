import './App.css'
import Lottery from './Lottery'
// import LudoBoard from './LudoBoard'
// import TodoList from './TodoList'
import { sum } from './helper'
function App() {
  let winCondition = (ticket) => {
    // some Winning Conditions
    // return sum(ticket) === 15;
    // return ticket.every((num)=>num===ticket[0]);
   return ticket[0]===0;
  }
  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      {/* <Lottery/> */}
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App;
