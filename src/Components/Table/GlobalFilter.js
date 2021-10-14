import React from "react";
import { useTable, useGlobalFilter, useAsyncDebounce, usePagination } from "react-table";
import {FiSearch} from "react-icons/fi";

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)

    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span className="flex w-72 rounded-xl border-2 ml-16 h-20 mt-7">
            <div className="flex items-center p-4 text-2xl text-primary ">
            <FiSearch/>
            </div>
            <input
                className="focus:outline-none font-poppins"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder="Search"
                type="search"
            />
        </span>
    )
}

export default GlobalFilter;