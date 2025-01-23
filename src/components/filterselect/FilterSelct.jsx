import React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
const FilterSelect = ({ label, value, options, onChange }) => (
    <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="bg-white rounded-full border border-[#363639] px-6 py-2.5 w-full">
            <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="bg-black">
            {options.map(({ label, value }) => (
                <SelectItem className="text-black mt-2 bg-white" key={value} value={value}>
                    {label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
)
export default FilterSelect