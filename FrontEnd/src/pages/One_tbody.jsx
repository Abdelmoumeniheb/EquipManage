import { Processor } from 'postcss'
import React from 'react'
import moment from 'moment'
import axios from 'axios'
import Modal from './Modal'
function One_tbody(props) {
    
    let valuedelete;
if(props.nameTable=="Employees list"){
    
    valuedelete=props.item.id;
}
else if (props.nameTable=="Equipments list"){ 
    valuedelete=props.item.reference;
}
else{
    valuedelete=props.item.id_user+"/"+props.item.reference_equi+"/"+props.item.borrow_date 
}
    const OnDelete =() => {
        if(window.confirm("are you sure to delete this users?")){
            axios.delete(`${props.nameapi}/${valuedelete}`)
            .then()
            .catch(err => console.log(err))
        }
    }
    if(props.nameTable==="Equipments list"){
        props.item["date_of_initiation"]=moment(props.item["date_of_initiation"]).format("YYYY-MM-DD");
    }
   else if(props.nameTable==="Providing List"){
    props.item["borrow_date"]=moment(props.item["borrow_date"]).format("YYYY-MM-DD");
    props.item["return_date"]=moment(props.item["return_date"]).format("YYYY-MM-DD");
    if(props.item["return_date"]=="Invalid date"){
        props.item["return_date"]="ACTIVE";
        
    }
   }
   //modal
   const [modal, setModal] = React.useState(false);
   const Return=()=>{
    if(props.nameTable==='Providing List' && props.item["return_date"] =="ACTIVE" ){
      return(
        <td className="py-4 px-6">
            <a href="#" onClick={()=>{setModal(true)}} className="font-medium text-green-500 dark:text-green-400 hover:underline">Return</a>
        </td>
      )

    }
    else{
        return(
            <td></td>
        )
    }
}
    const mytrdata=Object.values(props.item)
    
  return (
    <tr className={`border-b dark:bg-gray-900 dark:border-gray-700`}>{ 
           mytrdata.map(  i=> <td className="px-4 py-2">{i}</td>  )
        } 
        {Return()}
        <td className="py-4 px-6">
            <a href="#" onClick={()=>{OnDelete()}} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
        </td>
             { modal && <Modal nameapi={props.nameapi} closeModal={setModal} id={mytrdata[0]} refequi={mytrdata[1]} barrowdate={mytrdata[2]} />
                } 
    </tr>

        )
}
export default One_tbody;