import Image from "next/image";
// Components
import { Box, Gap, Typography } from "../../atoms";
import { BrideCard } from "../../molecules";
// Configs
import { APP_CONTENT } from "../../../config";

export default function SectionMempelai() {
  return (
    <Box as="container" direction="column" htmlProps={{ id: "brides" }}>
      <Typography tags="h4" align="center" className="font-black tracking-wider">Mempelai</Typography>
      <Gap height="h-10" />
      <Box as="div" direction="column" items="center">
        <Typography tags="p" align="center" className="italic tracking-widest w-4/5">
          “Maha Suci Allah yang telah menciptakan pasangan-pasangan semuanya,
          {" "}
          baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka maupun dari apa yang tidak mereka ketahui.”
        </Typography>
        <Gap height="h-4" />
        <Typography tags="p" align="center">
          QS. Yasiin 36 : 36
        </Typography>
      </Box>
      <Gap height="h-20" />
      <Typography tags="p" align="center" className="italic tracking-widest">
        Assalamu’alaikum Warahmatullah
      </Typography>
      <Gap height="h-4" />
      <Typography tags="p" align="center">
        Dengan meminta pertolongan kepada Allah, kami akan melangsungkan pernikahan kami
      </Typography>
      <Gap height="h-20" />
      <Box as="div" direction="column" items="center" className="overflow-hidden">
        <div className="flex flex-col items-center sm:justify-around sm:flex-row md:w-4/5">
          <BrideCard
            name={APP_CONTENT.bride.woman.name}
            images="/images/images.svg"
            familyOrder={APP_CONTENT.bride.woman["family-order"]}
            parents={APP_CONTENT["brides-parents"].woman}
            htmlProps={{
              "data-aos": "fade-right",
              "data-aos-duration": 1500,
            }}
          />
          <Box
            as="div"
            direction="column"
            className="justify-center h-52"
            htmlProps={{
              "data-aos": "fade-up",
              "data-aos-duration": 1500,
            }}
          >
            <h1 className="font-ephesis text-7xl">&</h1>
          </Box>
          <BrideCard
            name={APP_CONTENT.bride.man.name}
            images="/images/man.svg"
            familyOrder={APP_CONTENT.bride.man["family-order"]}
            parents={APP_CONTENT["brides-parents"].man}
            htmlProps={{
              "data-aos": "fade-left",
              "data-aos-duration": 1500,
            }}
          />
        </div>
      </Box>
    </Box>
  );
}
