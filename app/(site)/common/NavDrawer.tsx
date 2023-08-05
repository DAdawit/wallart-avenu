"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
type Anchor = "right";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PaymentIcon from "@mui/icons-material/Payment";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import DescriptionIcon from "@mui/icons-material/Description";
export default function NavDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button></button>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "#111827",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer("right", false)}
              onKeyDown={toggleDrawer("right", false)}
            >
              <div className="overflow-x-hidden px-3">
                <div className="flex px-5 text-white mt-8">
                  <IconButton
                    sx={{
                      color: "white",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className=" flex justify-center mt-8">
                  <Image
                    src="/logo.png"
                    alt="spector"
                    width={150}
                    height={100}
                    className="self-center object-contain"
                  />
                </div>
                <section className="mt-10 flex flex-col gap-2 pl-3">
                  <Link
                    href="/"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-primary rounded-lg px-2"
                  >
                    <HomeIcon className="text-2xl text-white" />
                    Home
                  </Link>

                  <Link
                    href="#services"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-primary rounded-lg px-2"
                  >
                    <MiscellaneousServicesIcon className="text-2xl" />
                    SERVICES
                  </Link>
                  <Link
                    href="#about"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 border-primary rounded-lg px-2"
                  >
                    <DescriptionIcon className="text-2xl text-white" />
                    ABOUT US
                  </Link>
                  <Link
                    href="/#pricing"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-primary rounded-lg px-2"
                  >
                    <PaymentIcon className="text-2xl text-white" />
                    PRICING
                  </Link>
                  <Link
                    href="#contactus"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-primary rounded-lg px-2"
                  >
                    <ContactPageIcon className="text-2xl" />
                    CONTACT US
                  </Link>
                </section>

                <section className="mt-14">
                  <h1 className="text-white text-center font-serif tracking-wider text-2xl ">
                    Visit Us
                  </h1>
                  <h3 className="text-white text-center text-sm font-medium tracking-wide">
                    Addis Ababa , Ethiopia
                  </h3>
                  <h3 className="text-white text-center text-sm font-medium tracking-wide">
                    wallartavenu@gmail.com
                  </h3>
                </section>

                <section className="mt-5 text-white">
                  <h2 className="text-center text-gray-200 font-bold tracking-wider">
                    CALL Now
                  </h2>
                  <h2 className="text-center text-white font-bold text-lg">
                    +251 94 211 0937
                  </h2>
                  <h2 className="text-center text-white font-bold text-lg">
                    +251936207512
                  </h2>
                  {/* <h2 className="text-center text-primary font-bold text-2xl">
                    +251936207512
                  </h2> */}
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
