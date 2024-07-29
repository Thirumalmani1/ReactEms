import React,{useEffect, useState} from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
   const [employees,setEmployees] = useState([])
   useEffect(() => {
      getAllEmployees()
   },[])

   function getAllEmployees()  {
    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch((error) => {
        console.error(error);
    })
   }

   const navigator = useNavigate();
   
   function addNewEmployee(){
        navigator('/add-employee')
   }

   function updateEmployee(id){ 
       navigator(`/edit-employee/${id}`)
   }

   function removeEmployee(id){
        deleteEmployee(id).then((response) => {
            console.log(response.data);
            getAllEmployees()
        }).catch((error) => {
            console.error(error);
        })
   }
   
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee} >Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(item.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(item.id)} style={{marginLeft:"10px"}}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent