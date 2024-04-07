import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";

function Customize({ bio, setBio, profilePic, setProfilePic }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log(profilePic);

  return (
    <>
      <Button
        radius="full"
        className="absolute md:w-40 lg:w-48 lg:h-16 md:text-2xl md:font-bold md:h-14 top-4 right-4 bg-gray-900
        text-green-600"
        onClick={onOpen}
      >
        {" "}
        Edit Profile
      </Button>
      <Modal
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-gray-800"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col mb-5 text-4xl mt-4 text-green-700">
                Customize your profile
              </ModalHeader>
              <ModalBody>
                <Textarea
                  maxLength={55}
                  label="Bio"
                  labelPlacement="outside"
                  variant="bordered"
                  value={bio}
                  onValueChange={setBio}
                  color="success"
                  classNames={{
                    inputWrapper: "text-green-600",
                    input: "text-[1.2rem]",
                    label: "text-green-600 text-3xl ml-2",
                  }}
                />

                <div className="bg-green-600 w-full h-20 mt-5 text-center py-5 text-2xl font-bold text-gray-900 mb-20 rounded-2xl">
                  Your profile pic goes here!
                  <input
                    className="bg-green-500 opacity-0 text-gray-900 border-r-full w-full h-full"
                    type="file"
                    name="photo"
                    onChange={(e) => {
                      setProfilePic(e.target.files[0].name);
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="absolute bottom-4 right-4 text-xl font-bold bg-gray-900 text-green-600"
                  onClick={onClose}
                >
                  Change
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export { Customize };
