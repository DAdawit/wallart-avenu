"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import AllOutIcon from "@mui/icons-material/AllOut";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
interface PropsType {
  image: string;
}
export default function FullImageDialog<PropsType>({ image }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmDelete = () => {
    confirm();
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={handleClickOpen}
        className="flex items-center gap-2 border-2 text-sm border-white text-white px-2 py-1 opacity-75 rounded-lg capitalize tracking-wide"
      >
        <span className={poppins.className}>full Image</span>
        <span>
          <AllOutIcon fontSize="small" />
        </span>
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Image
              height={1000}
              width={1000}
              alt="image"
              src={image}
              className="h-screen w-full object-contain block"
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
