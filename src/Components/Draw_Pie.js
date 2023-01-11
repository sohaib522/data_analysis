import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const abc={name: "Ali",name :"Sadia"}
const f=[abc]
//console.log(Object.keys(f).values().map((c)=>{return c}))
export default function Draw_Pie(props) {
   const pie_data=props.piie_data
  // const c=pie_data
   console.log("nm.................."+pie_data)
   
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    
    const  pieData = [
      {
         name: pie_data[0].reasons,
         value:pie_data[0].value
      },
      {
         name: pie_data[1].reasons,
         value: pie_data[1].value
      },
      {
         name: pie_data[2].reasons,
         value: pie_data[2].value
      },
      {
         name: pie_data[3].reasons,
         value: pie_data[3].value
      },
      
   ];
   console.log("The type is : "+ pieData)
   const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value }%`}</label>
       </div>
    );
 }
 return null;
};
  return (
    <div className='container'>
    <PieChart width={730} height={300} backgroundColor="blue">
    <Pie
       data={pieData}
       color="#000000"
       dataKey="value"
       nameKey="name"
       cx="50%"
       cy="50%"
       outerRadius={120}
       fill="#8884d8"
    >
       {pie_data.map((entry, index) => (
        
          <Cell
             key={`cell-${index}`}
             fill={COLORS[index % COLORS.length]}
          />
        
       ))}
    </Pie>
    <Tooltip content={<CustomTooltip />} />
    <Legend />
    </PieChart>
    { 
     //<h1>{props.data[0]}</h1>
       // <h1>{props.data.length}</h1>
     //props.data.map((c,i)=> {return(<h1 key={i} align="left">{c}</h1>)})
    }
    </div>
  )
}
