import React from 'react'
import Draw_bar from './Draw_bar'
import Stacked_bar from './Stacked_bar'

export default function Barcharts(props) {
  return (
    <div style={{display: "flex",flexDirection:'row'}}>
        <br/>
        <div align='center' style={{width : '90%',top:'160'}}><Stacked_bar/></div>
       {/*<div align='right' style={{width : '40%',top:'160'}}><Barcharts sites={props.sites} nars={props.nar} /></div>*/}
      {/*i tried to display the bar garh but God what reasons the browser freez*/}
    </div>
  )
}
