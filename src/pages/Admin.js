import {useEffect, useState} from "react";
import AdminControl from "./AdminControl";
import Login from "./Login";



export default () => {
    const [login, setLogin] = useState({code: 0})
    useEffect(() => {
        window.get("/api/admin/status", setLogin, ()=> {setLogin({code:0})})
    }, []);

    return <>
        {login.code === 0? <Login setLogin={setLogin}/>:<AdminControl/>}
    </>

}