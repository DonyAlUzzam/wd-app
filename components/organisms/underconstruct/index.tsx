import Image from "next/image";
import { Danger } from "react-iconly";
// Components
import { Box, Gap, Typography } from "../../atoms";

export default function UnderConstruct() {
  return (
    <Box as="container" direction="row" items="center" justify="center">
      <Image
        src="/images/ilustration-under-construction.svg"
        width={506}
        height={504}
        alt="img"
      />
      <Gap width="w-14" />
      <Box as="div" direction="row" items="center" className="gap-x-4">
        <Danger set="two-tone" size={80} primaryColor="white" />
        <Box as="div" direction="column" className="w-80">
          <Typography tags="h1" className="font-bold">
            Our Apologize
          </Typography>
          <Gap height="h-2" />
          <Typography tags="p" className="font-extralight">
            This page is currently under construction before being presented to
            you
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
