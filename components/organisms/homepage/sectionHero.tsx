import { useRouter } from "next/router";
// Components
import { Box, Gap, Typography, Button } from "../../atoms";
// Configs
import { Routes, APP_CONTENT } from "../../../config";
// Utils
import { formatDateTime, scrollTo } from "../../../utils";

export default function SectionHero() {
  const router = useRouter();

  return (
    <Box as="container" direction="column" items="center" justify="center" className="overflow-hidden" htmlProps={{ id: "home" }}>
    <h5 className="font-black uppercase text-base sm:text-lg">WE’RE GETTING MARRIED</h5>
    <Gap height="h-5 sm:h-10" />
      <h1
        className="font-serif text-5xl text-center sm:text-7xl"
        data-aos="fade-right"
        data-aos-duration={1500}
      >
        {APP_CONTENT.bride.woman.name}
      </h1>
      <Gap height="h-4" />
      <h1
        className="font-ephesis text-5xl text-center sm:text-7xl"
        data-aos="fade-down"
        data-aos-duration={1500}
      >
        &
      </h1>
      <Gap height="h-4" />
      <h1
        className="font-serif text-5xl text-center sm:text-7xl"
        data-aos="fade-left"
        data-aos-duration={1500}
      >
        {APP_CONTENT.bride.man.name}
      </h1>
      <Gap height="h-5 sm:h-20" />
      <Box as="div" direction="column" items="center" htmlProps={{ "data-aos": "fade-up", "data-aos-duration": 1500 }}>
        <Typography tags="p">InsyaAllah akan dilangsungkan pada :</Typography>
        <Gap height="h-2" />
        <Typography tags="h4" className="font-black">{formatDateTime(APP_CONTENT.akad.date, "dddd, dd MMMM y")}</Typography>
      </Box>
      <Gap height="h-10" />
      <Box as="div" direction="column" items="center">
        <Button
          label="See the invitation"
          variant="primary"
          size="md"
          buttonProps={{
            onClick: () => { scrollTo({ id: "brides", duration: 2000 }); },
          }}
        />
      </Box>
    </Box>
  );
}
