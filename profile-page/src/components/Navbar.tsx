"use client";
import "./Navbar.css";
import Profilepage from "./ProfilePage";
import { useRouter } from "next/navigation";
import profileImagee from "../../images/profile-image.jpg";
import AddIcon from '@mui/icons-material/MarkChatUnreadRounded';
export default function Navbar() {
    const router = useRouter();
    return(
       <div className="main-div">
            <div className="left-side">
                <ul>
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>Teams</li></a>
                    <a><li>Friends</li></a>
                </ul>
            </div>
            <div className="right-side">
                <ul>
                    <li className="icon"><AddIcon /></li>
                    <a href = {profileImagee.src}>
                        <li>
                            <img 
                                src={profileImagee.src}
                                alt="profileimage" 
                                className="h-10 w-10 rounded-full"
                            />
                        </li>
                    </a>
                    <button
                        onClick={() => {
                        localStorage.removeItem("token");
                        router.push("/sign-in");
                        }}
                        role="menuitem"
                        id="user-menu-item-2">
                        LogOut
                    </button>
                </ul>
            </div>
        </div>
    );
}