import React from 'react'
import Draw_bar from './Draw_bar'
import Stacked_bar from './Stacked_bar'
import json_data from "./Json_data/Json_file.json"
import { useState } from 'react'
import { Grid } from '@mui/material'
export default function Barcharts(props) {
  const [localdata,setlocaldata]=useState(json_data)
  const sites=Array.from(localdata).map((c)=>{return  c.name})
  const nar=Array.from(localdata).map((c)=>{return  c.nar})
 
  return (
  
    <Grid container spacing={3}>
        <Grid item xs = {16}  sm={12} md={9} xl={9}>
    <Draw_bar sites={sites} nars={nar} />
      </Grid>
      <Grid item xs = {2} sm={12} md={3} xl={3}>
      <Stacked_bar/>
      </Grid>
    
    
      {/*i tried to display the bar garh but God what reasons the browser freez*/}
      </Grid> 
  )
}
