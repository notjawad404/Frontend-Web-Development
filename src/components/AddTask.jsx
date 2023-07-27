import { useLocation } from "react-router-dom"

const AddTask = () => {
    const location = useLocation()
    const user = location.state.user
    console.log(user)
  return (
    <div>
    A
      <form>
      <div className="mb-3">
                <label className='px-2'>User</label><br></br>
                <input
                  type="text"
                  name="user"
                  className='w-60 px-2 rounded-lg'
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>Task Name</label> <br></br>
                <input
                  type="text"
                  name="taskName"
                  className='w-60 px-2 rounded-lg'
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>Description</label><br></br>
                <input
                  type="text"
                  name="description"
                  className='w-60 px-2 rounded-lg'
                />
              </div>
              <div className="mb-3">
                <label>Status</label><br></br>
                <select
                  name="status"

                  className='rounded-lg'
                >
                  <option value="">Select Status</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button className='bg-red-400 w-20 mx-20 rounded-lg py-1 text-white' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddTask
