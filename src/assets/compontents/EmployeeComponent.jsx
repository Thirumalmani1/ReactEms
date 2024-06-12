import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {
    
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')

   const [errors, setErrors] =useState({
       firstName: '',
       lastName: '',
       email: ''
   })

   function validateForm() {
       let isValid = true;
       const errorCopy = {...errors};
       if (firstName.trim()) {
           errorCopy.firstName = '';
       } else {
            errorCopy.firstName = 'First Name is required';
            isValid = false;
       }
       if(lastName.trim()) {
           errorCopy.lastName = '';
       } else {
           errorCopy.lastName = 'Last Name is required';
           isValid = false;
       }
       if(email.trim()) {
           errorCopy.email = '';
       } else {
           errorCopy.email = 'Email is required';
           isValid = false;
       }
       setErrors(errorCopy);
       return isValid;
    }

   const navigator = useNavigate();

  function saveEmployee (e) {
       e.preventDefault()
        if(validateForm()) {
            const employee = {firstName, lastName, email}
            console.log(employee)
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator("/employees")
            }).catch((error) => {
                console.error(error);
            });
        }
   }

  return (
    <div className='container'>
      <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center mt-2'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label  className='form-label mb-2'>First Name: </label>
                            <input type="text" name='firstName' placeholder='Enter First Name' value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} className={`form-control ${ errors.firstName ? 'is-invalid' : ''}`}/>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label  className='form-label mb-2'>Last Name: </label>
                            <input type="text" name='lastName' placeholder='Enter Last Name' value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} className={`form-control ${ errors.lastName ? 'is-invalid' : ''}`}/>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label  className='form-label mb-2'>Email: </label>
                            <input type="email" name='email' placeholder='Enter Email' value={email} 
                            onChange={(e) => setEmail(e.target.value)} className={`form-control ${ errors.email ? 'is-invalid' : ''}`}/>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div className="col text-center">
                          <button type='submit' className='btn btn-success center mt-2' onClick={saveEmployee} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent