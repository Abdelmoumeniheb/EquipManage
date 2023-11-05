import React from 'react'
import Oneinput from './Oneinput'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
function Form(props) {
  const Validator = require("validator");
  const [form, setform] = useState({})
  const [errors, setError] = useState({})
  const [user, setUser] = useState([])
  const handlechange =(e) => {
  setform({...form,[e.target.name]:e.target.value})
  }
  var test=true;
  var test_id_tran=true;
  var test_ref_tran=true;
  const [check_tran, setcheck_tran] = useState(true)

const onSubmitHandler = async (e)=>{
  e.preventDefault()
  if(props.titre=="Add Employee"){
   await axios.get(props.nameapi+"/"+form.id,form).then(res=>{
     if(res.data[0]['count(*)']==1){
      test=false;
     }
   }).catch(err=>{
     console.log(err);
   }) 
    if(form.id== undefined || form.id=="" ){
      alert("Veuillez remplir le champ id");
    }
    else if(test==false){
        alert("Cet id existe déjà");
    }
    else if(form.lastname== undefined || form.lastname==""){
      alert("Veuillez remplir le champ lastname");
    }
    else if(form.firstname==undefined || form.firstname==""){
      alert("Veuillez remplir le champ firstname");
    }
    else if( form.Email!==undefined && form.Email!=="" && !Validator.isEmail(form.Email)){
      alert("le champ Email invalid");
    }
    else{   
         axios.post(props.nameapi,form).then(res=>{
        alert(res.data.message)
     }).catch(err=>{
       console.log(err);
       setError(err.response.data)
     })
    }
     
  } else if (props.titre=="Add equipement"){
    await axios.get(props.nameapi+"/"+form.reference,form).then(res=>{
      if(res.data[0]['count(*)']==1){
       test=false;
      }
    }).catch(err=>{
      console.log(err);
    }) 
      if (form.reference==undefined || form.reference==""){
        alert("Veuillez remplir le champ reference");
      }
      else if(test==false){
        alert("Cet reference existe déjà");
    }
      else if (form.type== undefined || form.type==""){
        alert("Veuillez remplir le champ type");
      }
      else if (form.model== undefined || form.model==""){
        alert("Veuillez remplir le champ model");
      }
      else if ((form.type=="pc" || form.type=="PC") && (form.cpu== undefined || form.cpu=="" || form.gpu== undefined || form.gpu=="" || form.storage== undefined || form.storage=="" || form.ram== undefined || form.ram=="" || form.os== undefined || form.os=="" )){
            if (form.cpu== undefined || form.cpu==""){
              alert("Veuillez remplir le champ cpu");
            }
            else if (form.gpu== undefined || form.gpu==""){
              alert("Veuillez remplir le champ gpu");
            }
            else if (form.storage== undefined || form.storage==""){
              alert("Veuillez remplir le champ storage");
            }
            else if (form.ram== undefined || form.ram==""){
              alert("Veuillez remplir le champ ram");
            }
            else if (form.os== undefined || form.os==""){
              alert("Veuillez remplir le champ os");
            }
            else if (form.date_of_initiation== undefined || form.date_of_initiation==""){
              alert("Veuillez remplir le champ date_of_initiation");
            }
            else if (form.lifespan== undefined || form.lifespan==""){
              alert("Veuillez remplir le champ lifespan");
            }
            else if (form.comment== undefined || form.comment==""){
              alert("Veuillez remplir le champ comment");
            }
          }
      else if (form.date_of_initiation== undefined || form.date_of_initiation==""){
        alert("Veuillez remplir le champ date_of_initiation");
      }
      else if (form.lifespan== undefined || form.lifespan==""){
        alert("Veuillez remplir le champ lifespan");
      }
      else if (form.comment== undefined || form.comment==""){
        alert("Veuillez remplir le champ comment");
      }
      else{
        console.log("aaaaaaaaaa")
        axios.post(props.nameapi,form).then(res=>{
          alert(res.data.message)
       }).catch(err=>{
         console.log(err);
         setError(err.response.data)
       }
      )
      }
  }
  else{
     axios.get("http://localhost:3700/api/Trans/"+form.reference_equi,form).then(res=>{
      console.log("count is"+res.data[0]['count(*)']);
      if(res.data[0]['count(*)']>0){
        setcheck_tran(false);
        console.log("loula ="+check_tran)
      }
    }).catch(err=>{
      console.log(err);
    }) 
    await axios.get("http://localhost:3700/api/users/"+form.id_user,form).then(res=>{
      if(res.data[0]['count(*)']==1){
        test_id_tran=false;
      }
    }).catch(err=>{
      console.log(err);
    }) 
    await axios.get("http://localhost:3700/api/Equis/"+form.reference_equi,form).then(res=>{
      if(res.data[0]['count(*)']==1){
        test_ref_tran=false;
      }
    }).catch(err=>{
      console.log(err);
    }) 
    
    
if (form.id_user == undefined || form.id_user == ""){
  alert("Veuillez remplir le champ id_user");
}
else if(test_id_tran==true){
  alert("Cet id existe n'exsite pas");
}
else if (form.reference_equi == undefined || form.reference_equi == ""){
  alert("Veuillez remplir le champ reference_equi");
}else if(test_ref_tran==true){
  alert("Cet reference n'exsite pas");
}
else if(check_tran==false){
  
alert ("Cette Equipements est indisponible");
}
else if (form.borrow_date == undefined || form.borrow_date == ""){
  alert("Veuillez remplir le champ borrow_date");
}
else if (form.comment == undefined || form.comment == ""){
  alert("Veuillez remplir le champ comment");
}
else{
  axios.post(props.nameapi,form).then(res=>{
    alert(res.data.message)
 }).catch(err=>{
   console.log(err);
 }
)
}
  }
 
}
return ( 
<form  className='mr-16 w-auto' onSubmit={onSubmitHandler}>
  <div className="m-2 font-bold text-lg self-center">{props.titre}</div>  
  {
    props.Liste_of_thead.map(item => <Oneinput label={item} name={item} handlechange={handlechange} errors={errors.item}/>)
  }  
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</form>
  )
}

export default Form;