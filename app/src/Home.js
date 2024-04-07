import { Avatar, NextUIProvider } from "@nextui-org/react";
import Post from "./postComp";
import { Posts } from "./post";
import "./index.css";
import { Link, useOutletContext } from "react-router-dom";
import { Users } from "./Register";
import { Accounts } from "./.otherProfile";
import { useEffect, useCallback, useRef, useState } from "react";

export default function Home() {
  const { bio, setBio, profilePic, setProfilePic } = useOutletContext();
  let reverse = Posts.toReversed();
  const [search, setSearch] = useState("");
  const inputRef = useRef("");

  const divRef = useCallback(
    (node) => {
      if (node !== null) {
        if (inputRef.current.value !== "") {
          node.className =
            "w-[60vw] h-fit lg:top-22  md:top-20 pb-2 bg-gray-700 absolute top-16 rounded-xl left-2 visible";
        } else if (inputRef.current.value === "") {
          node.className =
            "w-[55vw] h-fit pb-2 bg-gray-700 absolute top-14 left-4 invisible";
        }
      }
    },
    [inputRef.current.value]
  );

  if (Posts.length === 0) {
    return (
      <NextUIProvider>
        <div className=" w-screen h-full relative  bg-gray-800 overflow-y-auto  ">
          <div className="w-screen px-4 no-scrollbar fixed z-50 h-16 md:h-20 lg:h-28 border-b-1 md:border-b-2 lg:border-b-3 border-green-500 bg-gray-900 shadow-2xl flex items-center md:justify-between md:px-6 lg:px-10">
            <div className="flex-col relative  w-[60vw] h-20">
              <input
                ref={inputRef}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                className="h-10 md:h-12 lg:h-16 lg:mt-[-0.5vh] absolute top-5 rounded-2xl text-xl md:text-2xl lg:text-4xl text-green-600 px-4 ml-2 w-full border-2 lg:border-b-3 border-green-600 bg-gray-700"
              />
              <div
                ref={divRef}
                className="w-[55vw]  h-fit pb-2 bg-gray-700 absolute top-14 left-4 visible"
              >
                {Accounts.filter((element) =>
                  element.userValue.match(search)
                ).map((element) => (
                  <>
                    <Link to={`/App/${element.userValue}`}>
                      <p className="text-xl lg:text-3xl md:text-2xl font-bold text-green-600 ml-4 mt-2">
                        {element.userValue}
                      </p>
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/logo.png"
                className="h-12 w-12 ml-16 md:h-14 lg:h-20 lg:w-20 md:w-14"
                alt=""
              ></img>
            </div>
          </div>

          <div className="flex-col h-full mt-20 pb-20 md:mt-24 md:w-full md:px-20 lg:mt-32 lg:px-24">
            <Post
              img="/tom.png"
              username="Jerry"
              text="Hey, here is where you will see everyone's posts. It seems there
                are no posts yet, try adding your own! We hope you enjoy your time
                here!!"
              photo="/download(1).jpg"
            />
          </div>
        </div>
      </NextUIProvider>
    );
  } else {
    return (
      <NextUIProvider>
        <div className=" w-screen h-full relative  bg-gray-800 overflow-y-auto ">
          <div className="w-screen px-4 no-scrollbar fixed z-50 h-16 md:h-20 lg:h-28 border-b-1 md:border-b-2 lg:border-b-3 border-green-500 bg-gray-900 shadow-2xl flex items-center md:justify-between md:px-6 lg:px-10 ">
            <div className="flex-col relative  w-[60vw] h-20">
              <input
                ref={inputRef}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                className="h-10 md:h-12 lg:h-16 lg:mt-[-0.5vh] absolute top-5 rounded-2xl text-xl md:text-2xl lg:text-4xl text-green-600 px-4 ml-2 w-full border-2 lg:border-b-3 border-green-600 bg-gray-700"
              />
              <div
                ref={divRef}
                className="w-[55vw] h-fit pb-2 bg-gray-700 absolute top-14 left-4 visible"
              >
                {Accounts.filter((element) =>
                  element.userValue.match(search)
                ).map((element) => (
                  <>
                    <Link to={`/App/${element.userValue}`}>
                      <p className="text-xl lg:text-3xl md:text-2xl font-bold text-green-600 ml-4 mt-2">
                        {element.userValue}
                      </p>
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/logo.png"
                className="h-12 w-12 ml-16 md:h-14 lg:h-20 lg:w-20 md:w-14"
                alt=""
              ></img>
            </div>
          </div>

          <div className="flex-col h-full mt-20 pb-20 md:mt-24 md:w-full md:px-20 lg:mt-32 lg:px-24">
            {reverse.map((element) => {
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
      </NextUIProvider>
    );
  }
}
