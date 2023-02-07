import React from 'react'

import classes from "./Btn.module.scss"

const Btn = (props) => {

    console.log(props.btnSize);

  return (
    <button className={props.btnClass}>{props.text}</button>
  )
}

export default Btn