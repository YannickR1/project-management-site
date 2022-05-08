import { useState } from "react"

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter() {
    const [currentFilter, setCurrentFilter] = useState('all')

    const handleClick = (newFilter) => {
        setCurrentFilter(newFilter)
    }
    return (
        <div className='project-filter'>
            <nav>
                {filterList.map((filter) => (
                    <button key={filter} onClick={() => handleClick(filter)}>
                        {filter}
                    </button>
                ))}
            </nav>
        </div>
    )
}
