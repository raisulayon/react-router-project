import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone, username, website}=user;
    
    const userStyle ={
        border:'2px solid red',
        padding: '5px',
        textAlign: 'center',
        borderRadius:'20px'
    }

    return (
        <div style={userStyle}>
            <h3>Customer Name:{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>User Name: {username}</p>
            <p>Website: {website}</p>
            <Link to={`user/${id}`}>Show Details</Link>  
            <Link to={`user/${id}`}>
                <button>Click Here</button>
            </Link>  
        </div>
    );
};

export default User;