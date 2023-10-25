import {useState} from "react";

const login = (username, password, setLogin, setMessage) => {
    window.post("/api/admin/login", {username, password}, (r)=> {
        setMessage(r.message)

        setLogin(1)

    }, (err) => {
        setMessage(err.message)
    })
}

export default ({setLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    return <div className="d-flex justify-content-center mt1">
        <div className="card mb-3 login-card mt1">
            <h5 className="red m-2">{message}</h5>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://login.aselsan.com.tr/Images/iconset/login.png" className="card-img" alt="..."/>

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <label>Username</label>
                        <input className="form-control" placeholder="username" onChange={e => setUsername(e.target.value)}/>
                        <label>Password</label>
                        <input className="form-control" placeholder="password" type="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="ph-2">
                    <button className="btn btn-info w100 mb1" onClick={e => login(username, password, setLogin, setMessage)}>LOGIN</button>
                </div>
            </div>
        </div>
    </div>
}