"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
const MoveToTop = () => {
  return (
    <Link
      href="#Nav"
      className="fixed bottom-10 right-10 flex items-center bg-secondary justify-center flex-col w-14 h-14 rounded-full text-white"
    >
      <ArrowUpwardIcon />
    </Link>
  );
};

export default MoveToTop;
