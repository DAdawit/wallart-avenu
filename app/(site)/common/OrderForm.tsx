"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
interface Props {
  image: string;
}

const OrderForm: React.FC<Props> = ({ image }) => {
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
        className="flex items-center gap-2  text-sm bg-secondary text-white px-2 py-1 opacity-90 rounded-lg capitalize tracking-wide"
      >
        <span className={poppins.className}>order Now</span>
        <span>
          <ShoppingBasketIcon fontSize="small" />
        </span>
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={false}
        maxWidth={"lg"}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form action="">
              <div className="grid gap-y-3 justify-items-center">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-full "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-full "
                />
                <input
                  type="number"
                  placeholder="phone Number"
                  className="rounded-full "
                />
                <input
                  type="text"
                  placeholder="Full Address"
                  className="rounded-full "
                />
                <button className="px-4 py-2 bg-secondary text-white rounded-full w-max uppercase text-sm font-medium tracking-wide">
                  place order
                </button>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderForm;
