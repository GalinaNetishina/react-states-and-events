export type TProject = {
    img: string,
    category: string      
  }

export type TProjectList = {    
    img: string,
    category: string
    }[]
  

export type TToolbar = {
    filters: string[],
    selected: string,
    onSelectFilter: (filter: string) => void
  }