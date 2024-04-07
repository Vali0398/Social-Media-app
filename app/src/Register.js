import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

let Users = [
  {
    userValue: "Guest",
    passwordValue: "Guest123",
  },
];

function Register() {
  const [userValue, setUserValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [confirmEmailValue, setConfirmEmailValue] = useState("");
  const buttonRef = useRef(null);

  function userIsInvalid() {
    if (userValue === "") {
      return false;
    } else if (userValue.length < 6 || userValue.length > 24) {
      return true;
    }
  }
  function passwordIsInvalid() {
    if (passwordValue === "") {
      return false;
    } else if (
      passwordValue.match("[$&+,:;=?@#|'<>.-^*()%!]") &&
      passwordValue.length > 8
    ) {
      return false;
    } else {
      return true;
    }
  }
  function emailIsInvalid() {
    if (emailValue === "") {
      return false;
    } else if (emailValue.match("@")) {
      return false;
    } else {
      return true;
    }
  }
  function confirmEmailInvalid() {
    if (emailValue !== confirmEmailValue) {
      return true;
    }
  }
  function preventSubmit() {
    if (
      userValue === "" ||
      passwordValue === "" ||
      emailValue === "" ||
      confirmEmailValue === "" ||
      userIsInvalid() ||
      passwordIsInvalid() ||
      emailIsInvalid() ||
      confirmEmailInvalid()
    ) {
      return true;
    } else {
      return false;
    }
  }

  function addUser() {
    Users.unshift({ userValue, passwordValue, emailValue });
  }
  return (
    <NextUIProvider>
      <>
        <div className="w-100 h-100 grid grid-rows-5 items-center px-[5vw] py-[2vh]">
          <div className=" text-gray-800 font-bold text-center text-[3rem] md:text-[5rem] row-start-1 row-end-2 col-start-1 col-end-2 m-0">
            Sign-up
          </div>
          <div className="flex items-center w-10/11 ">
            <Input
              classNames={{
                label: "text-xl font-bold md:text-3xl",
                input: "text-lg md:text-2xl ",
              }}
              isRequired
              label="Username"
              type="text"
              placeholder="Enter your username..."
              size="lg"
              variant="underlined"
              isClearable
              value={userValue}
              onValueChange={setUserValue}
              isInvalid={userIsInvalid()}
              errorMessage={
                userIsInvalid()
                  ? "Username must be between 6 and 24 characters"
                  : ""
              }
              className="text-[2vw]"
            />
          </div>
          <div className="flex h-fit items-center w-10/11">
            <Input
              classNames={{
                label: "text-xl font-bold md:text-3xl",
                input: "text-lg md:text-2xl ",
              }}
              label="Password"
              isRequired
              type="password"
              placeholder="Enter your password..."
              size="lg"
              variant="underlined"
              isClearable
              value={passwordValue}
              onValueChange={setPasswordValue}
              isInvalid={passwordIsInvalid()}
              errorMessage={
                passwordIsInvalid()
                  ? "Password must be at least 8 characters long and contain one special character"
                  : ""
              }
            />
          </div>
          <div className="flex h-fit items-center w-10/11">
            <Input
              classNames={{
                label: "text-xl font-bold md:text-3xl",
                input: "text-lg md:text-2xl ",
              }}
              isRequired
              label="Email"
              type="email"
              placeholder="Enter your email..."
              size="lg"
              variant="underlined"
              isClearable
              value={emailValue}
              onValueChange={setEmailValue}
              isInvalid={emailIsInvalid()}
              errorMessage={emailIsInvalid() ? `Email must contain "@"` : ""}
            />
          </div>
          <div className="flex h-fit items-center w-10/11">
            <Input
              classNames={{
                label: "text-xl font-bold md:text-3xl",
                input: "text-lg md:text-2xl ",
              }}
              isRequired
              label="Confirm email"
              type="email"
              placeholder="Enter your email..."
              size="lg"
              variant="underlined"
              isClearable
              value={confirmEmailValue}
              onValueChange={setConfirmEmailValue}
              isInvalid={confirmEmailInvalid()}
              errorMessage={
                confirmEmailInvalid() ? "Email doesn't match..." : ""
              }
            />
          </div>
          <div className="flex justify-center mt-10">
            <Button
              ref={buttonRef}
              variant="solid"
              radius="lg"
              className="bg-gray-900 font-bold  text-green-500 border-green-500 w-unit-4xl h-unit-2xl text-3xl md:w-unit-5xl md:h-unit-3xl md:text-4xl  "
              isDisabled={preventSubmit()}
              type="submit"
              onPress={addUser}
            >
              <Link to="App">SignUp</Link>
            </Button>
          </div>
        </div>
      </>
    </NextUIProvider>
  );
}

export { Register, Users };
