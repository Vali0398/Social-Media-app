import { useState, createContext, useEffect, useRef } from "react";
import { Button, Textarea, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

let Posts = [];
function PostPage() {
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState("");

  function makePost() {
    Posts.push({ text, photo });
  }
  function textIsInvalid() {
    if (text === "") {
      return false;
    } else if (text.length < 2 || text.length > 255) {
      return true;
    } else {
      return false;
    }
  }
  if (photo === "") {
    return (
      <div className=" bg-gray-800 w-screen h-screen fixed px-4 md:px-20 lg:px-28">
        <h1 className="text-green-500 text-4xl md:text-5xl lg:text-7xl lg:mt-20 lg:mb-32 font-bold mt-10 text-center">
          Make your post!
        </h1>
        <Textarea
          label="Text"
          placeholder="What's on your mind?"
          className="mt-14 bg-gray-700 lg:mb-20"
          color="success"
          classNames={{
            label: "text-3xl md:text-4xl lg:text-6xl ",
            input: "text-xl text-green-600 md:text-2xl lg:text-4xl",
          }}
          isRequired
          disableAutosize
          variant="bordered"
          value={text}
          onValueChange={setText}
          isInvalid={textIsInvalid()}
        />
        <div className="w-[92vw] relative md:w-full md:h-[8vh] md:py-5 md:text-3xl lg:h-[10vh] lg:text-5xl lg:py-9 h-[5vh] bg-gray-700 mt-10 rounded-2xl text-center text-2xl pt-1 text-green-500">
          Put your photo here
          <input
            className="bg-green-500 absolute left-0 top-0 bottom-0  opacity-0 text-gray-900 border-r-full w-full h-full"
            type="file"
            name="photo"
            onChange={(e) => {
              setPhoto(e.target.files[0].name);
            }}
          />
        </div>

        <div className="w-[94vw] md:w-full md:mt-20 flex justify-center">
          <Button
            onClick={makePost}
            radius="full"
            className="w-[30vw] h-[5vh] md:w-[32vw] font-bold md:text-5xl md:h-[6.5vh] text-4xl bg-green-500 text-gray-800 mt-10"
            isDisabled={text === ""}
          >
            <Link to="/App">Post</Link>
          </Button>
        </div>
      </div>
    );
  } else
    return (
      <div className=" bg-gray-800 w-screen h-screen fixed px-4 md:px-20 lg:px-28">
        <h1 className="text-green-500 text-4xl md:text-5xl lg:text-7xl lg:mt-12 lg:mb-20 font-bold mt-10 text-center">
          Make your post!
        </h1>
        <Textarea
          label="Text"
          placeholder="What's on your mind?"
          className="mt-14 bg-gray-700 lg:mb-12"
          color="success"
          classNames={{
            label: "text-3xl md:text-4xl lg:text-6xl ",
            input: "text-xl text-green-600 md:text-2xl lg:text-4xl",
          }}
          isRequired
          disableAutosize
          variant="bordered"
          value={text}
          onValueChange={setText}
          isInvalid={textIsInvalid()}
        />
        <div className="w-[92vw] relative md:w-full md:h-[8vh] md:py-5 md:text-3xl lg:h-[10vh] lg:text-5xl  lg:py-9 h-[5vh] bg-gray-700 mt-10 rounded-2xl text-center text-2xl pt-1 text-green-500">
          Put your photo here
          <input
            className="bg-green-500 absolute left-0 top-0 bottom-0  opacity-0 text-gray-900 border-r-full w-full h-full"
            type="file"
            name="photo"
            onChange={(e) => {
              setPhoto(e.target.files[0].name);
            }}
          />
        </div>

        <div className=" mt-10 w-full md:w-full md:ml-0 flex justify-center  md:h-[28vh] h-fit border-green-500 ">
          <img
            className="w-[70%] md:h-[32vh] md:w-[60%] lg:w-[50%] lg:h-[28vh] h-full md:object-cover text-green-500 text-xl"
            src={`/${photo}`}
            alt="Choose an img that you want!"
          ></img>
        </div>
        <div className="w-full md:mt-10 flex justify-center">
          <Button
            onClick={makePost}
            radius="full"
            className="w-[30vw] h-[5vh] md:w-[32vw] font-bold md:text-5xl md:h-[6.5vh] text-4xl bg-green-500 text-gray-800 mt-10"
            isDisabled={text === ""}
          >
            <Link to="/App">Post</Link>
          </Button>
        </div>
      </div>
    );
}

export { Posts, PostPage };
