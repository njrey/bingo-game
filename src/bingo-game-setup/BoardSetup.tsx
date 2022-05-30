import { ChangeEvent, FunctionComponent, useState } from "react";
import {
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Board } from "../bingo-game-board/BingoGame";
import "./BoardSetup.css";

export type BoardSetupProps = { boards: Board[] };

export const BoardSetup: FunctionComponent<BoardSetupProps> = ({
  boards,
}: BoardSetupProps) => {
  const [tileList, setTileList] = useState("");
  const [boardName, setBoardName] = useState("");

  const saveBoard = async (board: Board): Promise<void> => {
    await window.fetch("http://localhost:5000/boards/", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(board),
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSave = () => {
    const board = tileList.split(",").map((tile) => tile.trim());
    // use formik to do this
    if (board.length !== 25) {
      alert(`Bad board, board length is ${board.length}, should be 25`);
    } else {
      saveBoard({ squares: board, name: boardName });
    }
    onClose();
  };
  return (
    <div data-testid="board-setup" className="board-setup">
      <Button onClick={onOpen}>Create New</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="board-name" isRequired variant="floating">
              <Input
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setBoardName(event.target.value)
                }
                type="text"
                placeholder=" "
              ></Input>
              <FormLabel>Name</FormLabel>
            </FormControl>
            <FormControl id="tiles-input" isRequired variant="floating">
              <Textarea
                placeholder=" "
                onInput={(event: ChangeEvent<HTMLTextAreaElement>) =>
                  setTileList(event.target.value)
                }
              />
              <FormLabel>Tiles</FormLabel>
              <FormHelperText>
                Input a comma-separated list for Bingo tiles
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSave}>
              Save
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
