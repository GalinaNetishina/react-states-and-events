import { TProject } from "./models";


export default function Project({project}: TProject) {
  return (
    <div className='col-2'>
        <img 
            className='card-image' 
            src={project.img} 
            alt={project.category}
        />
    </div>
  )
}
