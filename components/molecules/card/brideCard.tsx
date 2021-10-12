import { HTMLAttributes } from "react";
import Image from "next/image";
// Components
import { Box, Gap, Typography } from "../../atoms";

interface BrideCardProps {
  name: string;
  images?: string;
  familyOrder: number;
  parents: {
    father: string;
    mother: string;
  }
  htmlProps?: HTMLAttributes<HTMLDivElement> | { "data-aos"?: string, "data-aos-duration"?: number };
}

export default function BrideCard(props: BrideCardProps) {
  const { name, images, familyOrder, parents, htmlProps } = props;
  return (
    <Box as="div" direction="column" items="center" htmlProps={htmlProps}>
      <Box
        as="div"
        direction="column"
        items="center"
        justify="center"
        className="rounded-full bg-white bg-opacity-10"
      >
        <Image src={images!} width={200} height={200} alt="img" />
      </Box>

      <Gap height="h-10" />

      <h4 className="font-ephesis text-5xl">{name}</h4>

      <Gap height="h-4" />

      <Box as="div" direction="column">
        <Typography tags="p" align="center">
          Anak ke-
          {familyOrder}
        </Typography>
        <Typography tags="h5" align="center">
          Bpk.
          {" "}
          <b>{parents.father}</b>
        </Typography>
        <Typography tags="h5" align="center">
          Ibu
          {" "}
          <b>{parents.mother}</b>
        </Typography>
      </Box>
    </Box>
  );
}
BrideCard.defaultProps = {
  images: "/",
  htmlProps: undefined,
};
