import "./index.css";
import { Register } from "./Register";
function SignUp() {
  return (
    <div className=" w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className=" bg-green-600 pb-3 md:pb-5 rounded-xl h-fit w-[80%] mt-[-10vh]  md:h-fit md:w-[65%] md:mt-[-20vh] lg:h-fit xl:w-[50%] xl:mt-[0vh]">
        <Register />
      </div>
    </div>
  );
}

export default SignUp;
