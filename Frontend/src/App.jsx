import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Profile from './Profile'
import Home from './Home'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'
import Login from './login'
import CreateTaxDue from './CreateTaxDue'
import EditTaxPayer from './EditTaxPayer'
import EditTaxDue from './EditTaxDue'
import MarkTaxAsPaid from './MarkTaxAsPaid'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/paid' element={<MarkTaxAsPaid />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/tax' element={<CreateTaxDue />}></Route>
      <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>
      <Route path='/tax-due' element={<EditTaxDue />}></Route>
      <Route path='/edit-tax-payers' element={<EditTaxPayer />}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App