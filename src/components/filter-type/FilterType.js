import * as React from 'react';
import CreatableSelect from "react-select";
import {getOptionBasedOnFilter} from "../../services/filter-service"
export default function FilterType({type,onChange}) {
    const options = getOptionBasedOnFilter(type);
 
  const handleChange = (currOptions) => {
      onChange(type,currOptions);
  };
  
  return (
    <CreatableSelect
    options={options}
    onChange={handleChange}
    isClearable
    isMulti={type!== 'Min base pay' && type !== "Min experience"}
    placeholder={type}
    
  />
  );
}