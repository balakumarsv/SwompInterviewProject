"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import bgImage from '../../images/bg-image.jpg';
import profile from '../../images/profile-image.jpg';
import "./ProfilePage.css"; 
import Navbar from "./Navbar";
import Loader from "../components/Loader";
import Post from "./Post";
import Friends from "./Friend";
import AddIcon from '@mui/icons-material/AddOutlined';
import EditIcon from '@mui/icons-material/Edit';
export default function ProfilePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/sign-in");
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);
  if (isLoggedIn === null) {
    return (<main className="w-100 flex h-screen justify-center items-center">
        <Loader />
    </main>);
  }
  return (
    <div>
      <Navbar />
      <div className="profile__topSection">
        <div className="profile__coverPhoto">
          <a href= {bgImage.src}></a>
          <a href= {profile.src}><img src={profile.src} className="profileAvatar" /></a>        
        </div>
      </div>
      <div className="profile-bar">
        <h2 className="profile-name">Mark Zuckerberg</h2>
        <div className="followers">
          <h3 >7.5M Followers</h3>
          <h3 className="following">500 Following</h3>
        </div>
      </div>
        <Friends />
        <div className="buttons">
          <button className="button2"><EditIcon className="icon1" />Edit Profile</button>
          <button className="button1"><AddIcon className="icon1"/>Add Story</button>
        </div>
        <div className="sub-nav">
          <a href="#post-section"><h3 className="sub-nav-post" >Post</h3></a>
          <h3 className="sub-nav-videos">Videos</h3>
          <h3 className="sub-nav-tags">Tags</h3>
          </div>
          <hr/>
          <div id="post-section">
            <Post />
          </div> 
          <div>
          <section id="#home">
            <h1></h1>
          </section>
        </div>
    </div>
  );
}
