import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import NewsWeek from './component/NewsWeek';
import Category from './component/Category';
import Students from './component/Students';
import Chats from './component/Chats';
import Profile from './component/Profile';
import Readmore from './component/readmore';
import { AddCatergory } from './component/AddCatergory';
import { AddStudents } from './component/AddStudents';
import { EditStudents } from './component/EditStudents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="add_students" element={<AddStudents />}></Route>
          <Route path="chat" element={<Chats />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="/dashboard/add_category" element={<AddCatergory />}></Route>
          <Route path="/dashboard/edit_students/:id" element={<EditStudents />}></Route>
          <Route path="newsweek" element={<NewsWeek />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="readmore" element={<Readmore />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
