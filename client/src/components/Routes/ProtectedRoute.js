import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import API from '../../services/API'
import { getCurrentUser } from '../../redux/features/auth/authActions'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()
    const getUser = async ()=>{
        try{
            const {data}= await API.get('auth/current-user')
            if(data?.success){
                dispatch(getCurrentUser(data))
            }
        } catch(error){
            localStorage.clear() //if error happens then delete all tokens
            console.log(error)
        }
    }
    useEffect(() => {
        getUser();
      }); //iski madat se getUser initailly called rahega
 if(localStorage.getItem('token')){
    return children;
 }else{
    return <Navigate to="/login"/>
 }
}
//ab jo  bhi route ko protect karna hai bas unko app.js mein wrap kar do
export default ProtectedRoute
