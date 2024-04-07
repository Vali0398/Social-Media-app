import { NextUIProvider, Avatar, Textarea } from "@nextui-org/react";
import { Users } from "./Register";
import { useEffect, useState } from "react";
import { Customize, Account } from "./modal";
import { useOutletContext } from "react-router-dom";
import { Posts } from "./post";
import Post from "./postComp";

export default function Profile() {
  const { bio, setBio, profilePic, setProfilePic } = useOutletContext();

  return (
    <NextUIProvider>
      <div className="bg-gray-800 md:px-16 lg:px-28 md:py-10 md:pb-32 no-scrollbar h-full relative overflow-y-auto pb-20 w-screen py-6 px-4">
        <div className="flex-col">
          <div className="text-4xl md:text-6xl ml-2 lg:ml-4  text-green-500 font-bold ">
            {Users[0].userValue}
          </div>
          <div className="flex gap-10 md:gap-16 lg:ml-8 lg:gap-20 ml-4 mt-5 mb-5">
            <Avatar
              src={`/${profilePic}`}
              className=" w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 "
            />
            <div className="flex flex-row gap-5 md:py-4 md:gap-8 ">
              <div className="flex-col text-green-500 w-fit h-fit ">
                <p className="text-center font-bold text-2xl md:text-5xl lg:text-6xl">
                  {Posts.length}
                </p>
                <p className="font-bold text-l md:text-3xl lg:text-4xl text-center">
                  Posts
                </p>
              </div>
              <div className="flex-col text-green-500 w-fit h-fit ">
                <p className="text-center font-bold text-2xl md:text-5xl lg:text-6xl">
                  0
                </p>
                <p className="font-bold text-l md:text-3xl lg:text-4xl text-center">
                  Followers
                </p>
              </div>
              <div className="flex-col text-green-500 w-fit h-fit ">
                <p className="text-center font-bold text-2xl md:text-5xl lg:text-6xl">
                  0
                </p>
                <p className="font-bold text-l md:text-3xl lg:text-4xl text-center">
                  Following
                </p>
              </div>
            </div>
          </div>

          <Customize
            setBio={setBio}
            bio={bio}
            profilePic={profilePic}
            setProfilePic={setProfilePic}
          />
          <div className=" pb-3 md:pb-4 border-gray-900 border-b-2 lg:border-b-4 md:border-b-3">
            <div className="shadow-2xl break-words leading-5 w-[90vw] md:w-full md:h-28 lg:h-32 h-20 rounded-2xl px-4 py-1 text-xl md:text-3xl lg:text-4xl text-green-600 border-2 md:border-b-3 lg:border-b-4 border-green-600 bg-gray-800">
              {bio}
            </div>
          </div>
          <div className=" w-full mt-2 lg:mt-3 h-fit ">
            {Posts.map((element) => {
              return (
                <Post
                  key={element.text}
                  img={`/${profilePic}`}
                  username={Users[0].userValue}
                  text={element.text}
                  photo={`/${element.photo}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
