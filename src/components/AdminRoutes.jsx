import { Outlet, Navigate } from 'react-router-dom'

const AdminRoutes = () => {
    let auth = true;
  return (
    auth==true ? <Outlet /> : <Navigate to='/' />
  )
}
export default AdminRoutes
