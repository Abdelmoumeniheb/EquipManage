import React,{useState,useContext} from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function Header() {
  const {user,setUser} = useContext(UserContext);
  const [redirect,setRedirect]=useState(false);
  console.log("this the user in the header : " + user);
  const logout=async (e)=>{
    e.preventDefault();
    await axios.post('http://localhost:3700/api/Logout',{},{withCredentials: true}).then((res)=>{
        setUser(null);
        setRedirect(true);
    }
    ).catch((err)=>{
        console.log(err);
    })
}
if(redirect){
  return <Navigate to='/Login'/>
}
  return (


<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/Employes" class="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Vivo_Energy_logo.svg/1280px-Vivo_Energy_logo.svg.png" class="mr-3 h-6 sm:h-9" alt="Vivi Energy Logo" />
  </Link>
  <div class="flex items-center md:order-2">
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        {/* <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">{user.name}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
        </div> */}
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link to="/Employes">
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </Link>
          </li>
        </ul>
      </div>
    <button onClick={logout} className='text-white bg-green-500  uppercase py-3 px-8 rounded-2xl'>Log out</button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to="/Employes">
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Employes</a>
            </Link>
          </li>
          <li>
            <Link to="/Equipements">
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Equipements</a>
              </Link>
          </li>
          <li>
            <Link to="/Providing">
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Providing Employes with Equipements</a>
            </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header