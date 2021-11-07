import React from "react"

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
        <span>
            <input 
             className="focus:outline-none font-poppins max-w-besar rounded-xl border-2 h-10"
                value={filterValue || ''}
                onChange={e => {
                    setFilter(e.target.value) // Set undefined to remove the filter entirely
                }}
            />
        </span>

    )
}

