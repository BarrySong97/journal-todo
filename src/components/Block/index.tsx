import { IconRadio } from "@douyinfe/semi-icons";
import React, { FC, KeyboardEventHandler, useState } from "react";
import { forwardRef } from "react";
export interface BlockProps {
  id: string;
  onEntter?: KeyboardEventHandler | undefined;
}

const Block = forwardRef<HTMLTextAreaElement, BlockProps>(
  ({ onEntter }, ref) => {
    const [content, setContent] = useState<string>("");
    const [isFocus, setIsFocus] = useState<boolean>(true);
    return (
      <div className="flex items-center">
        <IconRadio />

        {!isFocus ? (
          content
        ) : (
          <textarea
            ref={ref}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={onEntter}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            className="ml-2"
            rows={1}
            style={{ resize: "none" }}
          ></textarea>
        )}
      </div>
    );
  }
);

export default Block;
