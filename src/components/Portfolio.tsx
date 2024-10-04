import React, { useState } from 'react'
import { TProjectList } from './models';
import { data } from '../data.tsx'
import ProjectList from './ProjectList.tsx';
import Toolbar from './Toolbar.tsx';

export default function PortfolioList () {
  const fullData: TProjectList = data
  const [filter, setItems] = useState<string>('All');
  const handleFilter = (category:string) => 
    setItems(() => category)

  return (
    <>
    <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={filter}
        onSelectFilter={(filter) => { handleFilter(filter)}}
      />
    <ProjectList projects={
      filter == 'All'?
      fullData
      : fullData.filter(item => item.category === filter)} />
    </>    
    
  )
}
