import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Sidebar from './components/sidebar/Sidebar'

function App() {


  return (
    <div className='h-screen w-screen flex'>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default App
