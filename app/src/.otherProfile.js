import { Users } from "./Register";
import { NextUIProvider, Avatar, Button } from "@nextui-org/react";
import { Posts } from "./post";
import Post from "./postComp";
import { useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

let Accounts = [
  {
    userValue: "tom",
    passwordValue: "Tom123",
    emailValue: "TomRegele@gmail.com",
    userPhoto: "/tom.png",
  },
  {
    userValue: "jerry",
    passwordValue: "Jerry123",
    emailValue: "JerrySef@gmail.com",
    userPhoto: "/download.jpg",
  },
];

let messageHistory = [];

function OtherProfile() {
  const followers = useOutletContext().followers;
  const setFollowers = useOutletContext().setFollowers;
  const isFollowed = useOutletContext().isFollowed;
  const setIsFollowed = useOutletContext().setIsFollowed;
  const followText = useOutletContext().followText;
  const setFollowText = useOutletContext().setFollowText;

  function Follow() {
    if (isFollowed === false) {
      setFollowers(followers + 1);
      setIsFollowed(true);
      setFollowText("Unfollow");
      messageHistory.push({
        user: Accounts[0].userValue,
        photo: Accounts[0].userPhoto,
        messages: [],
      });
    } else {
      setFollowers(followers - 1);
      setIsFollowed(false);
      setFollowText("Follow");
      messageHistory.pop();
    }
  }
  return (
    <NextUIProvider>
      <div className="bg-gray-800 h-full relative overflow-y-auto pb-20 w-screen py-6 px-4">
        <div className="flex-col">
          <div className="text-4xl ml-2 text-green-500 font-bold ">
            {Accounts[0].userValue}
          </div>
          <div className="flex gap-10 ml-4 mt-5 mb-5">
            <Avatar src={Accounts[0].userPhoto} className=" w-20 h-20" />
            <div className="flex flex-row gap-5 ">
              <div className="flex-col text-green-500 w-fit h-fit">
                <p className="text-center font-bold text-2xl">1</p>
                <p className="font-bold text-l text-center">Posts</p>
              </div>
              <div className="flex-col text-green-500 w-fit h-fit ">
                <p className="text-center font-bold text-2xl">{followers}</p>
                <p className="font-bold text-l text-center">Followers</p>
              </div>
              <div className="flex-col text-green-500 w-fit h-fit ">
                <p className="text-center font-bold text-2xl">0</p>
                <p className="font-bold text-l text-center">Following</p>
              </div>
            </div>
          </div>

          <div className=" pb-3 border-gray-900 border-b-2">
            <div className="ml-1 w-[90vw] h-20 rounded-2xl px-4 py-1 text-xl text-green-600 border-2 border-green-600 bg-gray-800">
              I'm a professional mice catcher.
            </div>
            <div className="flex flex-row mt-2 justify-between px-6">
              <Button
                className="bg-gray-800 font-bold border-3 px-6  text-xl  text-green-600 border-green-600"
                onClick={Follow}
              >
                {followText}
              </Button>

              <Button
                isDisabled={!isFollowed}
                className="bg-gray-800 font-bold border-3  px-6 text-xl  text-green-600 border-green-600"
              >
                <Link to={`/App/messages`}>Message</Link>
              </Button>
            </div>
          </div>
          <div className=" w-full mt-2 h-fit ">
            <Post
              img="/tom.png"
              username={Accounts[0].userValue}
              text="Hey!! I'm busy catching Jerry at the moment."
              photo="/catchJerry.png"
            />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export { OtherProfile, Accounts, messageHistory };
