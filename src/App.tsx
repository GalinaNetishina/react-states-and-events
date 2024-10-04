import './App.css'
import Dropdown from './components/dropdown/Dropdown';


export default function App() {
  return ( 
    <Dropdown menu={['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']}/>
  )
}
