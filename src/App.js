import React, {useState} from "react";
import './App.css'
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import ListProducts from "./pages/listProducts/ListProducts";

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const deleteUser = (userID) => {
    setUsers([...users].filter(elem => elem.id !== userID))
  }

  const onChangeSearchHandler = (value) => {
    setSearch(value)
  }

  const addNewUser = (obj) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(json =>   console.log(json))
  }

  return (
    <div className="app">
      <Sidebar/>
      <div className="main">
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Home/>} />
              <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="users">
              <Route index element={<List searchValue={search} 
                setUsers={setUsers}
                users={users}
                deleteUser={deleteUser}
                onChange={onChangeSearchHandler}/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New onSubmit={addNewUser}/>}/>
            </Route>
            <Route path="products">
              <Route index element={<ListProducts/>}/>
              <Route path=":productId" element={<SingleProduct/>}/>
            </Route>
          </Routes> 
        </div>
      </div>
    </div>
  );
}

export default App;
