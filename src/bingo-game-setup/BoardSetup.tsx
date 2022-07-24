import { FunctionComponent } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, useFormikContext } from "formik";
import { Board } from "../bingo-game-board/BingoGame";
import "./BoardSetup.css";
import { BoardSetupForm } from "./BoardSetupForm";

export type BoardSetupProps = { boards: Board[] };

export const BoardSetup: FunctionComponent<BoardSetupProps> = ({
  boards,
}: BoardSetupProps) => {
  const saveBoard = async ({ boardName, tiles }: any) => {
    await fetch(`http://localhost:5000/boards/`, {
      method: "POST",
      body: JSON.stringify({ name: boardName, squares: tiles }),
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div data-testid="board-setup" className="board-setup">
      <Button onClick={onOpen}>Create New</Button>
      <Formik
        validateOnChange
        initialValues={{ boardName: "", tiles: "" }}
        isInitialValid={false}
        onSubmit={(values) => {
          saveBoard(values);
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalForm onClose={onClose}></ModalForm>
        </Modal>
      </Formik>
    </div>
  );
};

const ModalForm = ({ onClose }: any) => {
  const { submitForm, isValid } = useFormikContext();

  return (
    <ModalContent>
      <ModalHeader>Create Board</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <BoardSetupForm></BoardSetupForm>
      </ModalBody>

      <ModalFooter>
        <Button
          disabled={!isValid}
          colorScheme="blue"
          mr={3}
          onClick={(e: any) => {
            submitForm();
            onClose();
          }}
        >
          Save
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};
