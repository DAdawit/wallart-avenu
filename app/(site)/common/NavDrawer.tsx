"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
type Anchor = "right";
import CloseIcon from "@mui/icons-material/Close";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ContactPageIcon from "@mui/icons-material/ContactPage";
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
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <HomeIcon className="text-2xl text-white" />
                    Home
                  </Link>

                  <Link
                    href="/testimonial"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <BeenhereIcon className="text-2xl text-white" />
                    TESTIMONIAL
                  </Link>
                  <Link
                    href="#news"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <NewspaperIcon className="text-2xl" />
                    NEWS
                  </Link>
                  <Link
                    href="/#about"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <InfoIcon className="text-2xl text-white" />
                    ABOUT US
                  </Link>
                  <Link
                    href="#contact"
                    className="text-white font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <ContactPageIcon className="text-2xl" />
                    CONTACT
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
                    Open: 8.00 am - 2.30pm
                  </h3>
                  <h3 className="text-white text-center text-sm font-medium tracking-wide">
                    dawitccnt@gmail.com
                  </h3>
                </section>

                <section className="mt-5 text-white">
                  <h2 className="text-center text-gray-200 font-bold tracking-wider">
                    Reserve Now
                  </h2>
                  <h2 className="text-center text-primary font-bold text-2xl">
                    +251936207512
                  </h2>
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
