import { useParams, Link } from "react-router-dom";
import { User, Button } from "@nextui-org/react";
import { Accounts } from "./.otherProfile";
import { messageHistory } from "./.otherProfile";
import { useCallback, useRef, useState } from "react";
import Msg from "./msg";
export default function Chat() {
  const [text, setText] = useState("");
  const [send, setSend] = useState(false);
  const { id } = useParams();
  const userData = Accounts.filter((element) => element.userValue === id);

  const userMessage = messageHistory.filter((element) => element.user === id);

  console.log(userMessage);

  const textRef = useRef("");

  function sendMessage(e) {
    userMessage[0].messages.push(text);
    textRef.current.value = "";
    setSend(!send);
  }
  return (
    <div className="w-screen h-full relative  bg-gray-800 overflow-y-auto  ">
      <div className="w-screen bg-gray-900 h-20 flex items-center px-1 fixed z-50">
        <div>
          <Link to="/App/messages">
            <img src="/backArrow.png" alt=""></img>
          </Link>
        </div>
        <Link to={`/App/${userData[0].userValue}`}>
          <User
            name={userData[0].userValue}
            avatarProps={{
              src: userData[0].userPhoto,
              className: "w-14 h-14 ml-2",
            }}
            classNames={{ name: "text-3xl text-green-600 ml-2" }}
          />
        </Link>
      </div>

      <div className="mt-20 mb-40">
        {userMessage[0].messages.map((element) => {
          return <Msg key={Math.random()} content={element} />;
        })}
      </div>

      <div className="h-20 w-[101vw]  bg-gray-900 fixed z-50 bottom-0 flex items-center">
        <textarea
          ref={textRef}
          onChange={(e) => setText(e.target.value)}
          className="w-[70vw] h-12 text-xl no-scrollbar px-3 py-[1vh] outline-none leading-5  ml-4 rounded-2xl border-2 border-green-600 text-green-500 bg-gray-700 "
        ></textarea>
        <Button
          isDisabled={textRef.current.value === ""}
          onClick={sendMessage}
          className="ml-1 mb-1 text-green-600 font-bold text-[1.9rem] bg-gray-900"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
