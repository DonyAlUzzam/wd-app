import Image from "next/image";
import Link from "next/link";
import { Location, Calling, Message } from "react-iconly";
// Components
import { Box, Logo, Gap, Typography, Anchor } from "../../atoms";
// Configs
import { APP_BRAND, APP_CONTENT } from "../../../config";

const Footer = () => {
  return (
    <footer className="flex flex-col mb-6">
      {/* divide-y divide-gray-600 */}
      <Box as="container" direction="row" className="pt-14 pb-20" />
      <Box
        as="container"
        direction="row"
        items="center"
        justify="center"
        className="h-14 rounded-md bg-gray-50 bg-opacity-10"
      >
        <Box as="div" direction="column" className="ml-3">
          <Typography tags="p">
            &copy;
            {" "}
            {new Date().getFullYear()}
            {" "}
            -
            {" "}
            {APP_BRAND}
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
