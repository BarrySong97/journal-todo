import { Checkbox, Input } from "@douyinfe/semi-ui";
import { FC, useRef, useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { TodoItem } from "../../App";
import { IconRadio } from "@douyinfe/semi-icons";
import Block, { BlockProps } from "../Block";
export interface TodoListProps {}

const TodoList: FC<TodoListProps> = ({}) => {
  const [blocks, setBlocks] = useState<BlockProps[]>([{ id: uuidv4() }]);
  const itemsRef = useRef<HTMLTableColElement[]>([]);
  return (
    <div style={{ color: "#a4b5b6" }} onKeyDown={(e) => {}}>
      {blocks.map((v, i) => (
        <Block
          ref={(el) => {
            itemsRef.current[i] = el;
          }}
          id={v.id}
          key={v.id}
          onEntter={(e) => {
            console.log(e.code);

            if (e.code === "Enter") {
              setBlocks([...blocks, { id: uuidv4() }]);

              e.preventDefault();
            }

            if (e.code === "ArrowDown" && i !== blocks.length - 1) {
              itemsRef.current?.[i + 1].focus();
              e.preventDefault();
            }

            if (e.code === "ArrowUp" && i !== 0) {
              itemsRef.current?.[i - 1].focus();
              e.preventDefault();
            }

            if (e.code === "Backspace") {
              if (blocks.length >= 2 && e.target.value.length === 0) {
                setBlocks(blocks.slice(0, blocks.length - 1));
              }
            }
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
