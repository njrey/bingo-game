import { useState, useEffect } from "react";

import "./BoardList.css";

const BoardList = ({ ...props }) => {
  const { boards } = props;
  const [selectedBoard, setSelectedBoard] = useState<string | undefined>();

  useEffect(() => {
    if (selectedBoard) {
      deleteBoard(selectedBoard);
    }
  }, [selectedBoard]);

  return boards.map((board: any, index: number) => {
    return (
      <div>
        <div key={board.name + index}>{board.name + index}</div>
        <span onClick={() => setSelectedBoard(board.id)}>Delete</span>
      </div>
    );
  });
};

async function deleteBoard(id?: string): Promise<any> {
  await fetch(`http://localhost:5000/boards/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
  // TODO: Handle the response
}
export default BoardList;
