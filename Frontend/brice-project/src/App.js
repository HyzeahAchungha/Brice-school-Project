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
import StudentLogin from './component/students/Login';
import StudentSignup from './component/students/Signup';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/adminlogin" element={<Login />}></Route>
					<Route path="/dashboard" element={<Dashboard />}>
						<Route path="" element={<Home />}></Route>
						<Route path="students" element={<Students />}></Route>
						<Route path="chat" element={<Chats />}></Route>
						<Route path="profile" element={<Profile />}></Route>
						<Route path="newsweek" element={<NewsWeek />}></Route>
						<Route path="category" element={<Category />}></Route>
					</Route>
					<Route path="/students/login" element={<StudentLogin />} />
					<Route path="/students/signup" element={<StudentSignup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
