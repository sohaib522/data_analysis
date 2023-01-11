import React from 'react'
import Draw_bar from './Draw_bar'
import Stacked_bar from './Stacked_bar'
import json_data from "./Json_data/Json_file.json"
import { useState } from 'react'

export default function Barcharts(props) {
  const [localdata,setlocaldata]=useState(json_data)
  const sites=Array.from(localdata).map((c)=>{return  c.name})
  const nar=Array.from(localdata).map((c)=>{return  c.nar})
 
  return (
    <div style={{display: "flex",flexDirection:'row'}}>
        <br/>
        <div align='center' style={{width : '95%',top:'160'}}><Stacked_bar/></div>
       <div style={{width : '95%',top:'160'}}><Draw_bar sites={sites} nars={nar} /></div>
      {/*i tried to display the bar garh but God what reasons the browser freez*/}
    </div>
  )
}
