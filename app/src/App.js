import { Avatar, NavbarItem, NextUIProvider } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";
import { useState, useRef } from "react";

export default function App() {
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [followers, setFollowers] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false);
  const [followText, setFollowText] = useState("Follow");
  const [followersJ, setFollowersJ] = useState(0);
  const [isFollowedJ, setIsFollowedJ] = useState(false);
  const [followTextJ, setFollowTextJ] = useState("Follow");
  return (
    <NextUIProvider>
      <div className="fixed w-full bottom-0 z-50">
        <Navbar
          isBordered
          height={"4rem"}
          className="bg-green-600 text-gray-800 font-bold md:h-24 lg:h-32"
        >
          <NavbarItem>
            <Link to="/App" className="md:text-4xl lg:text-5xl text-2xl">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="post" className="md:text-4xl lg:text-5xl text-2xl">
              Post
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="messages" className="md:text-4xl lg:text-5xl text-2xl">
              Messages
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="profile">
              <Avatar
                src={`/${profilePic}`}
                as="button"
                isBordered
                className="md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </Link>
          </NavbarItem>
        </Navbar>
      </div>

      <Outlet
        context={{
          bio,
          setBio,
          profilePic,
          setProfilePic,
          followers,
          setFollowers,
          isFollowed,
          setIsFollowed,
          followText,
          setFollowText,
          followersJ,
          setFollowersJ,
          isFollowedJ,
          setIsFollowedJ,
          followTextJ,
          setFollowTextJ,
        }}
      />
    </NextUIProvider>
  );
}
