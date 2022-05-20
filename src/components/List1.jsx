import React from 'react'
import Axios from 'axios';

const List1 = () => {
    const[state,setState]=useState('');

    const getData=()=>{
        Axios.get('https://devapi.buopso.com/api/lms/owners').then((response)=>{
            console.log(response);
            setState(response);

        })
    }
  return (
      <>
      <button onClick={getData}>Get List1</button>
      {
          state.map(ele=>{

        <div>ele.data</div>

          })
      }
    </>
  )
}

export default List1;