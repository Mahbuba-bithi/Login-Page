// import React,{useContext} from "react";
// import UserContext from "../Context/userContext";

// function Profile (){
//      const {user} = useContext(useContext)
      

//      if (!user) return
//        <div>please log in </div>

      
//        return <div>welcome {user.username}</div>
// }

// export default Profile


import React, { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {

    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Please login</div>;
    }

    return <div>Welcome {user.username}</div>;
}

export default Profile;