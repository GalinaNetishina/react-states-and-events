import { TIconSwitch } from './models'


export default function IconSwitch({ icon, onSwitch }: TIconSwitch) {
  return (
    <span className="material-icons" onClick = {onSwitch}>
    {icon}
    </span>
  )
}

