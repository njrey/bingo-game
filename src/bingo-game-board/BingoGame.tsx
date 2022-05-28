import { useState, useEffect } from "react";
import { BoardGrid } from "./BoardGrid";
import { BoardSetup } from "../bingo-game-setup/BoardSetup";
import { BoardList } from "../BoardList";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./BingoGame.css";

export type Board = {
  name: string;
  squares: string[];
};

export const BingoGame = () => {
  const [tileList, setTileList] = useState<string[]>([]);
  const [boardsList, setBoardsList] = useState<Board[]>([]);
  const [boardName, setBoardName] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const { tileList, boardsList } = await fetchBoards();
      setTileList(tileList);
      setBoardsList(boardsList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (tileList.length === 25) {
      // saveBoards({ squares: tileList, name: boardName });
    }
  }, [tileList]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="bingo-game">
      <Button onClick={onOpen}>Create New</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Board</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BoardSetup boards={boardsList} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="boards-container">
        <div>
          <BoardList setTiles={setTileList} boards={boardsList}></BoardList>
        </div>
        <BoardGrid tileList={tileList} />
      </div>
    </div>
  );
};

async function fetchBoards(): Promise<{
  tileList: string[];
  boardsList: Board[];
}> {
  const response = await fetch("http://localhost:5000/boards/");
  type JSONResponse = Array<Board>;
  const respJson: JSONResponse = await response.json();
  const boardsList = respJson;
  const boards = boardsList[0];
  let theseBoards: string[] = [];
  if (response.ok) {
    theseBoards = boards && boards ? boards.squares : [];
  }
  return { tileList: theseBoards, boardsList: boardsList };
}
