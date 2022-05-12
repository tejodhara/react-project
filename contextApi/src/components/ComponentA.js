import React from 'react'
import ComponentB from './ComponentB'

function ComponentA(props) {
  console.log("props A",props);
  return (
    <div>
      <ComponentB uname={props.uname} />
    </div>


  )
}

export default ComponentA