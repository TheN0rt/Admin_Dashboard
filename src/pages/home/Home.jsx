import React, {useEffect, useState} from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Revenue from '../../components/revenue/Revenue'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>{
            setProducts(json)
            console.log(json)
          })
 }, [])

  return (
    <div className='home'>
      <div className="container">
        <div className="widgets">
          <Widget type='user' amount={234} percentOfItem={20}/>
          <Widget type='orders' amount={24} percentOfItem={5}/>
          <Widget type='earnings' amount={567} percentOfItem={-10}/>
          <Widget type='balance' amount={30145} percentOfItem={-1}/>
        </div>
        <div className="charts">
          <Revenue/>
          <Chart/>
        </div>
        <Table data={products} title={'Best-selling products'}/>
      </div>
    </div>
  )
}

export default Home