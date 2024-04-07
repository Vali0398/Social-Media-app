import { NextUIProvider, User } from "@nextui-org/react";
import { Accounts } from "./.otherProfile";
import Message from "./messageComp";
import { Link } from "react-router-dom";
import { messageHistory } from "./.otherProfile";

function Messages() {
  if (messageHistory.length === 0) {
    return (
      <NextUIProvider>
        <div className="bg-gray-800 h-screen w-screen py-3 md:py-5">
          <h1 className="text-green-600 text-4xl md:text-5xl ml-7 md:ml-10 font-bold">
            Messages
          </h1>
          ;
          <div className="text-green-600  text-3xl md:text-4xl flex mt-[30vh] md:mt-[35vh] justify-center">
            There are no messages
          </div>
        </div>
      </NextUIProvider>
    );
  } else
    return (
      <NextUIProvider>
        <div className="bg-gray-800 h-screen w-screen py-3 md:py-5">
          <h1 className="text-green-600 text-4xl md:text-5xl lg:text-6xl ml-7 md:ml-10 font-bold">
            Messages
          </h1>
          ;
          <div>
            {messageHistory.map((element) => {
              return <Message src={element.photo} name={element.user} />;
            })}
          </div>
        </div>
      </NextUIProvider>
    );
}

export { Messages };
