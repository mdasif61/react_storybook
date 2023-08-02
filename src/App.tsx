import './App.css'
import Card from './components/Card/Card'
import Multiselect from './components/Multiselect/Multiselect'

function App() {

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      {/* <Card bg='bg-red-500'></Card> */}
      <Multiselect></Multiselect>
    </div>
  )
}

export default App
