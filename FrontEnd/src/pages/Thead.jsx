import React from 'react'
import One_thead from './One_thead'
function Thead(props) {
  return (
    <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        {
            props.Liste_of_thead.map(item => <One_thead name={item} />)
        }     
        </tr>
    </thead>
  )
}
export default Thead;