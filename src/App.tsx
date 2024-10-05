import './App.css'
import Store from './components/Store';
import Dropdown from './components/dropdown/Dropdown';


export default function App() {
  return ( 
    // <Store/>
    <Dropdown menu={['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']}/>
  )
}
