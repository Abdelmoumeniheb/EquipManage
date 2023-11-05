import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';
import Form from './Form'
import Table from './Table'
import axios from 'axios';
import Header from './Header'
import { useEffect } from 'react';
import moment from 'moment';
function Equipements() {
  // props for the Table
  const nameTable="Equipments list";
  const Liste_of_thead=["reference","type","model","cpu","gpu","storage","ram","os","date_of_initiation","lifespan","comment" ];
  const [data, setData] = React.useState([]);
   useEffect(() => {
    axios.get("http://localhost:3700/api/Equis")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
},[])
const {user,setUser,Ready} = useContext(UserContext);
  if (user ==null && user==undefined){
    return <Navigate to='/Login'/>
  }
//props for the form
const titre="Add equipement";
const nameapi="http://localhost:3700/api/Equis";
  return (
    <>
    <Header/>
    <div>
      <div className="grid grid-cols-4  ml-28 mr-20 mb-8">
        <Form titre={titre} nameapi={nameapi} Liste_of_thead={Liste_of_thead}/>
        <Table nameTable={nameTable} Liste_of_thead={Liste_of_thead} data={data} nameapi={nameapi}/>
      </div>
    </div>
    </>
  )
}
export default Equipements;