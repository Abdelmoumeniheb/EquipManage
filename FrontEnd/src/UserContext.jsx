import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';
export const UserContext = createContext({});

export function UserContextProvider({children}){
  const [user,setUser]=useState(null);
  const [Ready, setReady] = useState(false);
  useEffect(()=>{
    if (!user) {
      axios.get('http://localhost:3700/api/profile',{withCredentials: true}).then(({data}) => {
        setUser(data);
      setReady(true);}
      )
      .catch(err => console.log(err))
    }
} ,[]);
  return (
    <UserContext.Provider value={{user,setUser,Ready}}>
        {children}
    </UserContext.Provider>
  )
}