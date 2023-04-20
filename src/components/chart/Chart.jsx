import React from 'react'
import './Chart.scss'
import {AreaChart, XAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from 'recharts'

const Chart = () => {

   const data = [
      {
         'name': 'January',
         'Total': 1200
      },
      {
         'name': 'February',
         'Total': 900
      },
      {
         'name': 'March',
         'Total': 1400
      },
      {
         'name': 'April',
         'Total': 1200
      },
      {
         'name': 'May',
         'Total': 1480
      },
      {
         'name': 'June',
         'Total': 1300
      }
    ]
    

  return (
    <div className='chart'>
      <h3 className="title">Last 6 months</h3>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
         <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
               </linearGradient>
               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
               </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke='gray'/>
            {/* <YAxis /> */}
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
         </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart