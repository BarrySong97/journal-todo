import { FC, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Block, { BlockProps } from "../Block";
import { useEffect } from "react";
export interface TodoListProps {}

const TodoList: FC<TodoListProps> = ({}) => {
  const [blocks, setBlocks] = useState<BlockProps[]>([
    { id: uuidv4(), focus: true, selectionStart: 0 },
  ]);
  const itemsRef = useRef<HTMLTableColElement[]>([]);
  useEffect(() => {
    blocks.forEach((v, i) => {
      if (v.focus) {
        itemsRef.current[i]?.focus();
        itemsRef.current[i]?.setSelectionRange(
          v.selectionStart,
          v.selectionStart
        );
      }
    });
  }, [blocks]);
  return (
    <div style={{ color: "#a4b5b6" }} onKeyDown={(e) => {}}>
      {blocks.map((v, i) => (
        <Block
          selectionStart={v.selectionStart}
          focus={v.focus}
          ref={(el) => {
            itemsRef.current[i] = el;
          }}
          id={v.id}
          key={v.id}
          onEntter={(e) => {
            console.log(e.code);

            if (e.code === "Enter") {
              blocks.forEach((v) => {
                v.focus = false;
              });
              setBlocks([
                ...blocks,
                { id: uuidv4(), focus: true, selectionStart: 0 },
              ]);

              e.preventDefault();
            }

            if (e.code === "ArrowDown" && i !== blocks.length - 1) {
              blocks[i + 1].focus = true;
              blocks[i + 1].selectionStart =
                itemsRef.current[i]?.selectionStart;
              blocks[i].focus = false;

              setBlocks([...blocks]);
              e.preventDefault();
            }

            if (e.code === "ArrowUp" && i !== 0) {
              console.log(blocks);

              blocks[i].focus = false;
              blocks[i - 1].focus = true;
              blocks[i - 1].selectionStart =
                itemsRef.current[i]?.selectionStart;
              setBlocks([...blocks]);
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
