import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useContext } from 'react';
import Download from './Download';


export default function Draw_bar(props) {
 

 const sites=Object.values(props.sites)
 const nars=Object.values(props.nars)
 const length_of_nars=nars.length
 const convert_string_to_float=nars.map((sum)=>parseFloat(sum))
//const remove_special_symble_from_nars=nars.map((c)=>{return c})
const sum=convert_string_to_float.reduce((total,current)=>total+current,0)
const avg=Math.round(sum/length_of_nars)

console.log(sum )
    const state = {
        
        series: [{
          data: nars
        }],
        options: { 
          chart: {
            type: 'pie',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: sites,
          }
        },
      
      
      };
  return (
    <div  style={{width : '40%'}}>
        <h3>Average Nar ( {avg} ) </h3>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />

    
    </div>
  )
}
