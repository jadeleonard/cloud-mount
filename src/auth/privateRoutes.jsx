import {Outlet, Navigate} from 'react-router-dom'







const PrivateRoutes = () =>{
    const Auth = true;
    return Auth ? <Outlet /> : <Navigate to={'/'} />
}




export default PrivateRoutes