import { Card, CardBody, CardHeader, User, Image } from "@nextui-org/react";
export default function Post({ img, username, text, photo }) {
  return (
    <Card className="mt-1 mb-4 bg-gray-950 text-green-500">
      <CardHeader>
        <User
          name={username}
          avatarProps={{
            src: img,
            className: "md:w-14 md:h-14 lg:w-20 lg:h-20",
          }}
          className="md:ml-3 lg:ml-4 lg:mt-1"
          classNames={{
            name: "text-3xl md:text-4xl lg:text-5xl ml-2 mt-[-0.5vh]",
          }}
        />
      </CardHeader>
      <CardBody className="w-full overflow-hidden">
        <p className="text-xl md:text-2xl lg:text-3xl md:ml-4 lg:ml-6 text-wrap">
          {text}
        </p>
        <div className="w-full text-center h-fit mt-3 flex items-center justify-center">
          <Image src={photo} className="w-full h-fit md:h-[24vh] " />
        </div>
      </CardBody>
    </Card>
  );
}
