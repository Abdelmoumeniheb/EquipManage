import React, { useEffect,useContext } from 'react'
import Form from './Form'
import Table from './Table'
import { UserContext } from '../UserContext'
import Header from './Header'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function Employes() {
  const nameTable="Employees list";
  const Liste_of_thead=["id","lastname","firstname","Email","departement"];
  const [data, setData] = React.useState([])
  useEffect(() => {
      axios.get("http://localhost:3700/api/users")
          .then(res => setData(res.data))
          .catch(err => console.log(err))
  },[])
  const {user,setUser,Ready} = useContext(UserContext);
  if (user ==null && user==undefined){
    return <Navigate to='/Login'/>
  }
  //props for the form
const titre="Add Employee"
const nameapi="http://localhost:3700/api/users"
  return (
    <>
    <Header/>
    <div className="grid grid-cols-4  ml-28 mr-20 mb-8">
      <Form titre={titre} nameapi={nameapi} Liste_of_thead={Liste_of_thead}/>
      
      <Table nameTable={nameTable} nameapi={nameapi} Liste_of_thead={Liste_of_thead} data={data} />
    </div>
    </>
    
  )
}

export default Employes