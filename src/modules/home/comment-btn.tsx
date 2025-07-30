"use client";

import { useState } from "react";
import CommentEditor from "./comment-editor";

const CommentBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-[32px] flex justify-center items-center items-center rounded-lg bg-white rouded-ld p-4 text-sm text-black font-bold cursor-pointer"
      >
        What&apos;s on your mind?
      </button>
      <CommentEditor isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default CommentBtn;
