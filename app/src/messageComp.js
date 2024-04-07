import { User } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
export default function Message({ name, src }) {
  return (
    <Link to={name}>
      <div className="w-full h-20 md:h-28 bg-gray-700 px-4 md:px-6 mt-4">
        <User
          className="h-full text-green-500"
          name={name}
          avatarProps={{
            src: `${src}`,
            className: "w-14 md:w-24 h-14 md:h-24",
          }}
          classNames={{ name: "text-2xl md:text-5xl ml-2 md:mt-[-1vh]" }}
        />
      </div>
    </Link>
  );
}
