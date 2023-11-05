import React from 'react'
import One_tbody from './One_tbody'
import axios from 'axios'
function Tbody(props) {
      return ( 
  <tbody>
    {
      props.data.map(item => <One_tbody nameTable={props.nameTable} item={item} nameapi={props.nameapi}/>)
    }
   </tbody>
  )
}

export default Tbody