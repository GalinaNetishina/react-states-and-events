import { TToolbar } from './models'


export default function Toolbar({ filters, selected, onSelectFilter }: TToolbar) {
  return (
    <div className='toolbar'>
      {filters.map((i) => (
        <button
          onClick={(e) => onSelectFilter(e.currentTarget.innerText)}
          className={i === selected ? 'btn btn-active' : 'btn'}
          key={i}>{i}
        </button>
      ))}
    </div>
  )
}
