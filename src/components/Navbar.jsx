import { signOut } from "firebase/auth"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { auth } from "../firebase"

export default function Navbar() {
 const {currentUser} = useContext(AuthContext)
    return(
        <div className="navbar">
            <span>Chat Room</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="Profile"/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=> signOut(auth)}>logout</button>
            </div>
        </div>
    )
}