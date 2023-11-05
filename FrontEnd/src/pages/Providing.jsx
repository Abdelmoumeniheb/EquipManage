import React, { useEffect } from 'react'
import Form from './Form'
import Table from './Table'
import axios from 'axios';
import Header from './Header'
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';

function Providing() {
  const {user,setUser,Ready} = useContext(UserContext);
  if (user ==null && user==undefined){
    return <Navigate to='/Login'/>
  }
  const nameTable="Providing List";
  const Liste_of_thead_forTable=["id_user","reference_equi","borrow_date","return_date","comment","comment_return"];
  const Liste_of_thead_forform=["id_user","reference_equi","borrow_date","comment"];
  const list_of_inputsearch=["id_user","reference_equi"]
  //props for the form
const titre="Add Providing"
// justify-evenly items-start mx-28 my-16
const nameapi="http://localhost:3700/api/Trans"
  return (
    <>
    <Header/>
    <div className="grid grid-cols-4  ml-28 mr-20">
      <Form titre={titre} nameapi={nameapi} Liste_of_thead={Liste_of_thead_forform}/>
      <Table list_of_inputsearch={list_of_inputsearch} nameTable={nameTable} Liste_of_thead={Liste_of_thead_forTable} nameapi={nameapi} />
    </div>
    </>
  )
}

export default Providing