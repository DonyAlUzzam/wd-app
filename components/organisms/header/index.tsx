import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cx from "classnames";
// Components
import { Logo, Button, Box } from "../../atoms";
import Navigation from "./navigation";
// Utils
import { useWindowDimensions } from "../../../utils";

export default function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const router = useRouter();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const fixedHeader = () => {
      setIsFixed(window.scrollY > 25);
    };

    window.addEventListener("scroll", fixedHeader);

    return () => {
      window.removeEventListener("scroll", fixedHeader);
    };
  }, [width]);

  const headerclass = cx(
    "flex flex-col transition",
    {
      "fixed h-20 w-screen top-0 bg-[#eabfb9] shadow-xl z-10 duration-500": isFixed,
      "relative h-32": !isFixed,
      // hidden: width < 640,
    },
  );

  return (
    <header className={headerclass}>
      <Box
        as="container"
        // direction="row"
        direction="column"
        items="center"
        justify="center"
        flex="1"
      >
        <Navigation />
      </Box>
    </header>
  );
}
