import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
import axios from 'axios'
import Oneinput from './Oneinput'
import {useState,useEffect} from 'react'
function Table(props) {
  const [referenceUser, setReferenceUser] = useState('')
  const [referenceEqui, setReferenceEqui] = useState('')
  const [stituation, setStituation] = useState('')
  const Search=()=>{
if(props.nameTable=='Providing List'){
  return(
<>
<input onChange={(e)=>{setReferenceUser(e.target.value)}}  placeholder='User ID' className="bg-gray-50 w-96 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
<input onChange={(e)=>{setReferenceEqui(e.target.value)}} placeholder='Reference' className="bg-gray-50 w-96 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
<div className="flex m-2">
<div class="flex items-center w-96 pl-4 rounded border border-gray-200 dark:border-gray-700">
    <input  onClick={(e)=>{setStituation(e.target.value)}} id="bordered-radio-1" type="radio" value="ALL" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ALL</label>
</div>
<div class="flex items-center w-96 pl-4 rounded border border-gray-200 dark:border-gray-700">
    <input onClick={(e)=>{setStituation(e.target.value)}} id="bordered-radio-2" type="radio" value="ACTIVE" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ACTIVE</label>
</div>
</div>
</>
  )
}
else if (props.nameTable=='Equipments list'){
  return(
<>
<input onChange={(e)=>{setReferenceEqui(e.target.value)}}  placeholder='Reference' className="bg-gray-50 w-96 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </> 
  )
  }
  else{
return(
<>
<input onChange={(e)=>{setReferenceUser(e.target.value)}}  placeholder='User ID' className="bg-gray-50 w-96 m-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</>
)}}

// let nameapi_fordata;
// if(props.nameTable=='Liste of Transactions'){
//   nameapi_fordata=props.nameapi+"/"+referenceUser+"/"+referenceEqui+"/"+stituation;
// }
const [data, setData] = useState([])

useEffect(() => {
    
    axios.get(props.nameapi,{params:{id_user:referenceUser,reference_equi:referenceEqui,cond:stituation}})
        .then(res => {setData(res.data);
      }
        )
        .catch(err => console.log(err))
},[referenceUser,referenceEqui,stituation])

  return (
    <div className='col-span-3'>
      <div className=''>
        {Search()}
      </div>
      <div className="overflow-x-auto relative border-2 border-black sm:rounded-lg w-9/10 flex flex-col items-stretch">
          <div className="m-2 font-bold text-lg self-center">{props.nameTable}</div>
          <div className="overflow-y-auto h-96">
          <table class="w-1/3 m-2 text-sm text-left text-gray-500 dark:text-gray-400">
              <Thead Liste_of_thead={props.Liste_of_thead} />
              <Tbody data={data} nameTable={props.nameTable}nameapi={props.nameapi}/>
          </table>
          </div>
      </div>
    </div>


  )
}

export default Table;