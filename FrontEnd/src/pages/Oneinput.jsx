import React from 'react'
import { useEffect } from 'react';
function Oneinput({label,name,handlechange,erros}) {const changetype=(label)=> {
if(label=="Email"){
  return "Email";
}
else if(label=="borrow_date" || label=="date_of_initiation"){
  return "date";
}
else{
  return "text";
}
  }

  return (
  <div class="mb-6">
    <label for={label} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    <input type={changetype(name)} onChange={handlechange} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>


    
  
  )
}

export default Oneinput