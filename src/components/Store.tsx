import React, { useState } from 'react'
import { products } from '../data.tsx'
import IconSwitch from './IconSwitch.tsx';
import CardView from './CardView.tsx';
import ListView from './ListView.tsx';

export default function Store () {
  const [mode, setItems] = useState<string>('list');
  const handleSwitch = () => {
    setItems(() => mode == 'list'? 'module' : 'list')}
  const data = products

  return (
    <>
    <IconSwitch icon={'view_'+mode} onSwitch={handleSwitch}/>
    {mode == 'list' ?
    <CardView products = {data} />:
    <ListView products = {data} />
  }
    </>    
    
  )
}
