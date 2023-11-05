import React from 'react'
import moment from 'moment'
import Oneinput from './Oneinput'
import axios from 'axios'
import { useEffect } from 'react'
function Modal({closeModal,id,refequi,barrowdate,nameapi}) {
    
const [commentreturn,setCommentreturn]=React.useState('')
const handleconfirm=()=>{
    
        axios.put(nameapi,{id_user:id,reference_equi:refequi,return_date:moment(new Date()).format("YYYY-MM-DD"),comment_return:commentreturn}).then(
            res=>{
                console.log(res)
                closeModal()
            }
        )
      }

      
  return (
<div id="authentication-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={()=>{closeModal(false)}}  type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
            <h1>Return Equipment :</h1>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">id_user</label>
            <input readOnly value={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">reference</label>
            <input readOnly value={refequi} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">borrow_date</label>
            <input readOnly value={barrowdate} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">comment return</label>
            <input onChange={(e)=>{
                setCommentreturn(e.target.value)
            }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button onClick={()=>{handleconfirm()}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button>
            </div>
        </div>
    </div>
</div> 

  )
}

export default Modal;