import React from 'react';
import './Container.css'

export default function Container(props){
    let c = ''
    let {small,large} = props
    if(small){
        c = "small"
    }else if(large){
        c = "large"
    }
    if(props.className){
        c +=" " + props.className
    }
    
    return <div className={'container' + (c? " "+c :"")} >{props.children}</div>
}