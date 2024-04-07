import { Accounts } from "./.otherProfile";
import { Users } from "./Register";
import { NextUIProvider, Avatar, Button } from "@nextui-org/react";
import { Posts } from "./post";
import Post from "./postComp";
import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { messageHistory } from "./.otherProfile";
function Jerry() {
  const followers = useOutletContext().followersJ;
  const setFollowers = useOutletContext().setFollowersJ;
  const isFollowed = useOutletContext().isFollowedJ;
  const setIsFollowed = useOutletContext().setIsFollowedJ;
  const followText = useOutletContext().followTextJ;
  const setFollowText = useOutletContext().setFollowTextJ;

  function Follow() {
    if (isFollowed === false) {
      setFollowers(followers + 1);
      setIsFollowed(true);
      setFollowText("Unfollow");
      messageHistory.push({
        user: Accounts[1].userValue,
        photo: Accounts[1].userPhoto,
        messages: [],
      });
    } else {
      setFollowers(followers - 1);
      setIsFollowed(false);
      setFollowText("Follow");
    }
  }
  return (
    <NextUIProvider>
      <div className="bg-gray-800 h-full relative overflow-y-auto pb-20 w-screen py-6 px-4">
        <div className="flex-col">
          <div className="text-4xl ml-2 text-green-500 font-bold ">
            {Accounts[1].userValue}
          </div>
          <div className="flex gap-10 ml-4 mt-5 mb-5">
            <Avatar src={Accounts[1].userPhoto} className=" w-20 h-20" />
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
            <div className="w-[90vw] h-20 rounded-2xl px-4 py-1 text-xl text-green-600 border-2 border-green-600 bg-gray-800">
              I'm a professional mice catcher.
            </div>
            <Button
              className="bg-gray-800 font-bold border-3 mt-2 text-xl ml-4 text-green-600 border-green-600"
              onClick={Follow}
            >
              {followText}
            </Button>
          </div>
          <div className=" w-full mt-2 h-fit ">
            <Post
              img={Accounts[1].userPhoto}
              username={Accounts[1].userValue}
              text="Delicious!!"
              photo="/jerryCheese.jpg"
            />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export { Jerry };
