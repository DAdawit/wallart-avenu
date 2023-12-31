"use client";
import React, { useState, useRef, FormEvent } from "react";
import { useForm, Resolver } from "react-hook-form";
import { Spinner } from "../icons/Spinner";
import emailjs from "@emailjs/browser";
import { notify } from "../ToastMesssage/toast";
type Props = {
  image: string;
  handleClose: () => void; // Add this line
};
const Form: React.FC<Props> = ({ image, handleClose }) => {
  const [loading, setLoading] = useState(false);

  // Specify the type for the ref
  const form = useRef<HTMLFormElement>(null);

  // Specify the type for the event
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_jxddwtq",
          "template_u7d8plq",
          form.current,
          "v1VsnnEVI9sHTzHjv"
        )
        .then(
          (result) => {
            notify(
              "your order has been sent, we will contact you soon",
              "success"
            );
            setLoading(false);
            handleClose();
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid gap-y-1 justify-items-center w-60">
          <h1 className="uppercase text-4xl font-bold text-center my-5">
            order now
          </h1>
          <div className="grid">
            <label>First Name</label>
            <input
              required
              type="text"
              name="firstName"
              className="rounded-full font-medium focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="grid">
            <label>Last Name</label>
            <input
              required
              type="text"
              name="lastName"
              className="rounded-full font-medium focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="grid">
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              className="rounded-full font-medium focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="grid">
            <label>phone Number</label>
            <input
              required
              type="text"
              name="phoneNumber"
              className="rounded-full font-medium focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="grid">
            <label>Full Adress</label>
            <input
              required
              type="text"
              name="fullAdress"
              className="rounded-full font-medium focus:ring-secondary focus:border-secondary"
            />
          </div>
          <input type="hidden" name="image" value={image} />
          <button
            type="submit"
            className="flex justify-center mt-5 items-center bg-secondary rounded-full w-max text-white font-medium gap-x-3 py-1 px-8"
          >
            <span>Place Order</span>
            <span>{loading ? <Spinner /> : null}</span>
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
