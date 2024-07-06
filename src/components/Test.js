"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

const Test = () => {
  const handleClick = (mode) => {
    mode
      ? toast.success("Testing Completed Successfully")
      : toast.error("Testing Failed");
  };
  return (
    <Button
      variant="secondary"
      className="bg-orange-200 hover:bg-orange-500"
      onClick={() => handleClick(true)}
    >
      Show Message
    </Button>
  );
};

export default Test;
