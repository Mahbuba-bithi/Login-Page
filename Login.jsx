// import React,{useState,useContext} from "react";
// import UserContext from "../Context/userContext";

// function Login (){
//     // pass username ar state lagbe value update korte hobe
//     const [username, setUsername] = useState('')
//       const [password, setPassword] = useState('')

//       const {setUser} = useContext(useContext)


//     //  eita data dewar jonne
//     const handleSubmit =() =>{
//      e.preventDefault()
//      setUser({username,password})
//     }





//     return (
//         <div>
//             <h2>Login</h2>
//             <input type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
            
            
            
            
//             placeholder="username"/>
//             "  "
//             <input type="text"
            
//              value={password}
//             onChange={(e) => setPassword(e.target.value)}
            
            
            
            
            
//             placeholder="username"/>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }

// export default Login;




import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;