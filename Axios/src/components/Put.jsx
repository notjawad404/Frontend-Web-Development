import axios from "axios"
import { useEffect } from "react"


export default function Put() {
    useEffect(()=>{
        axios.put('https://reqres.in/api/users/2',{
            "name": "Simon Riely",
            "job": "Soldier"
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}
