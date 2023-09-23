import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="users">
            <h2>Our Users: {users.length}</h2>
            {
                users.map(user=><User user={user}></User>)
            }
        </div>
    );
};

export default Users;