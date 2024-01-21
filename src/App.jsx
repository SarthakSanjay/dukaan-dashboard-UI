import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Sidebar from './components/sidebar/Sidebar'

function App() {


  return (
    <div className='h-screen w-screen flex relative'>
        <Sidebar />
        <Dashboard />
        {/* <div className='w-1/6 h-full bg-blue-500 fixed top-0 left-0'></div>
        <div className='w-5/6 h-full bg-red-500 absolute top-0 right-0 '>
          <div className='h-1/2 bg-yellow-500 w-full'></div>
          <div className='h-1/2 bg-green-500 w-full'></div>
          <div className='h-1/2 bg-purple-500 w-full'></div>
        </div> */}

    </div>
  )
}

export default App
