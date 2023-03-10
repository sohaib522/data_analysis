import React, { useEffect } from 'react'
import json_data from "./Json_data/Json_file.json"
import Formulate_Table from "./Formulate_Table";
import { useState } from 'react';
import Draw_Pie from './Draw_Pie';
import Site_count from './Site_count';
import Download from './Download';
import { Card, Grid, StepContext } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import Barcharts from './Barcharts';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Draw_Map from './Draw_Map';
import "../index.css"
export default function Home() {
  /*local data is state incase data is updated or changed localdata will change
  also */
    const [localdata,setlocaldata]=useState(json_data)
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
   /*all reasons are stored in pie_char_data there occurence will be calculated
   through out the pie_char_data array that is neccessary to draw
used to draw pie */
   const pie_char_data =Array.from(localdata).map((c)=>{return c.reason} )
   //Available reasons in json
   const reasons=['Op_Challenges','Increased_LS','Bad_Weather','High_Voltage']
   const name =reasons.map((c,i)=>{return {reasons: c}})
   //piechar_data is convert to replace spaces with _
 
   const temp=pie_char_data.map((c)=>c.toString())
   const removing_spaces=temp.map((c)=>c.replace(" ","_" ))
   //Occurence array is created and intialy initialize with 0
   const occurence=[0,0,0,0];
   //calculating the occurence of reasons
   removing_spaces.map((c)=>{ if(c==="Operational_Challenges")
   {
    occurence[0]=occurence[0]+1
   }
   else if(c==="Increased_LS"){
    occurence[1]=occurence[1]+1
   }
   else if(c==="Bad_Weather"){
    occurence[2]=occurence[2]+1
   }
   else if(c==="High_Voltage")
   {
    occurence[3]=occurence[3]+1
   }
  })
 
  

  const map_occurance=occurence.map(c=>{return {"occurence" : c}})
  //calculating percentage of occurence that will be passed to draw pie
  const percentage_of_occurence=occurence.map((c)=>{return Math.round((100 * c/pie_char_data.length))})
  const percentage=percentage_of_occurence.map((c)=>{ return {percentage : c} })
 
  console.log("Percentage of occurence  : "+ percentage)
  //Merging two arrays into one [reason,percentage of occurence ]
const pie_data=name.map((c,i)=>{return { reasons : name[i].reasons,value : percentage[i].percentage} })
// Separating two arrays sites,nar from json to draw bar garh 
    const sites=Array.from(localdata).map((c)=>{return  c.name})
    const nar=Array.from(localdata).map((c)=>{return  c.nar})
   
  return (

    <div > 
 
    <Grid container className="container" spacing={6} >
  <Grid item xs={0} sm={5} xl={2} md={1}><h1></h1></Grid>
  <Grid item xs={4} md={1} xl={1} sm={4} id="sites">
  <Site_count site_count={localdata.length} sites={sites} nars={nar} />
  </Grid>
  <Grid item xs={6} md={5} xl={4} sm={12}>
  <Draw_Pie piie_data={pie_data} />
    </Grid>
    <Grid item xs={12} md={5} xl={3} sm={12}>
    <Draw_Map/>
    </Grid>
   
    <Grid item xs={12} md={12} xl={12} sm={12} sx={{position : 'relative',top : 0,right : 30}}>
    
    <Download sites={sites} nars={nar} />
    </Grid>
    <Grid item xs={90} md={12} xl={12} sm={30}>
    <Formulate_Table json_list={localdata} site_count={localdata.length}/>
      </Grid>
 
 
   
  
    
   

    </Grid>
    </div>
  
  )
}
