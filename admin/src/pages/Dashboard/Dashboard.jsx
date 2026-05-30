import React from 'react'
import "./Dashboard.css"
import { useState } from 'react'
import {toast} from "react-toastify"
import { useEffect } from 'react'
import axios from "axios"

const Dashboard = ({url}) => {
  
  const [details, setDetails] = useState([])

  const fetchAllDetails = async () =>{
    const response = await axios.get(url+"/api/form/list");
    if (response.data.success) {
      setDetails(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchAllDetails();
  },[])

  return (
    <div>
        <div className="sidebar">
          <div className="logo">She Can Admin</div>
          <ul>
            <li><a href="#">Volunteers</a></li>
          </ul>
        </div>
        <div className="main">
          <div className="header">
            <div>
              <h1>Dashboard Overview</h1>
              <p style={{color:"#aaa"}}>Welcome back, Admin</p>
            </div>
            <div className='admin'>
              <div className='avatar'>A</div>
              <div>
                <h4>Admin</h4>
                <small style={{color:"#aaa"}}>Administrator</small>
              </div>
            </div>
          </div>
          {/* Table */}
          <h2 className='section-title'>All Volunteers</h2>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody className='details'>
                {details.map((item,index)=>(
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Dashboard
