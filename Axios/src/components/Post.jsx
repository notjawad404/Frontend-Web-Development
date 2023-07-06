import axios from "axios"
import { useEffect } from "react"


export default function Post() {
    // const [person, setPerson] = useState("");
    useEffect(() => {
        axios.post('https://reqres.in/api/users', {
            "name": "Bravo Six",
            "job": "Soldier"
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, []) 
  return (
 
    <div>
      <h2>Post Api</h2>
    </div>
  )
}
