import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import NewsWeek from './component/NewsWeek';
import Category from './component/Category';
import Students from './component/Students';
import Chats from './component/Chats';
import Profile from './component/Profile';
import { AddCatergory } from './component/AddCatergory';
import { AddStudents } from './component/AddStudents';
import { EditStudents } from './component/EditStudents';
import Start from './component/Start';
import StudentsLogin from './component/StudentsLogin';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
        <Route path="/start" element={<Start />}></Route>
          <Route path="/adminlogin" element={<Login />}></Route>
          <Route path="/students_login" element={<StudentsLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="chat" element={<Chats />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="newsweek" element={<NewsWeek />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="/dashboard/add_category" element={<AddCatergory />}></Route>
          <Route path="/dashboard/add_students" element={<AddStudents />}></Route>
          <Route path="/dashboard/edit_students/:id" element={<EditStudents />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
