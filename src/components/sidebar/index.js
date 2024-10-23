import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard, MdSearch } from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/enabled/564x/5d/ef/8c/5def8c3cff33b08ffcfd66c5fc725fc2.jpg"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response);
      const profileImages = response.data.images;
      // Check if images exist and have at least one item
      if (profileImages && profileImages.length > 0) {
        setImage(profileImages[0].url);
      }
    }).catch(error => {
      console.error("Error fetching user data:", error);
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
        <SidebarButton title="AI Search" to="/ai-search" icon={<MdSearch />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
