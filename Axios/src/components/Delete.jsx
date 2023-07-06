import axios from "axios"
import { useEffect } from "react"


export default function Delete() {
    useEffect(()=>{
        axios.put('https://reqres.in/api/users/2')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}
