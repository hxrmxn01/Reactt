import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard, MdSearch } from "react-icons/md"; // Added MdSearch icon for AI Search
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/enabled/564x/5d/ef/8c/5def8c3cff33b08ffcfd66c5fc725fc2.jpg"
  );
  
  useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response);
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        {/* New AI Search Button */}
        <SidebarButton title="AI Search" to="/ai-search" icon={<MdSearch />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
