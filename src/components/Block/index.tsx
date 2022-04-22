import { IconRadio } from "@douyinfe/semi-icons";
import { Checkbox } from "@douyinfe/semi-ui";
import React, { FC, KeyboardEventHandler, useState } from "react";
import { useEffect } from "react";
import { forwardRef } from "react";
export interface BlockProps {
  id: string;
  onEntter?: KeyboardEventHandler | undefined;
  selectionStart: number;
  focus: boolean;
}

const Block = forwardRef<HTMLTextAreaElement, BlockProps>(
  ({ onEntter, focus }, ref) => {
    const [content, setContent] = useState<string>("");

    const dealWithContent = (content: string) => {
      if (content.startsWith("TODO")) {
        const result = content.replace("TODO", "");

        return (
          <>
            <Checkbox /> {result}
          </>
        );
      }
      return content;
    };

    return (
      <div className="flex items-center">
        <IconRadio />

        {!focus ? (
          <div style={{ height: 24 }} className="ml-2">
            {dealWithContent(content)}
          </div>
        ) : (
          <textarea
            ref={ref}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            onKeyDown={(e) => {
              if (e) {
                onEntter?.(e);
              }
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
