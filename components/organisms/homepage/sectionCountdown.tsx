import { useState, useEffect } from "react";
import Image from "next/image";
// Components
import { Box, Gap, Typography, Button } from "../../atoms";
// Configs
import { APP_CONTENT } from "../../../config";

export default function SectionCountdown() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const difference = +new Date(APP_CONTENT.akad.date) - +new Date();

    const timer = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => { clearTimeout(timer); };
  }, [days, hours, minutes, seconds]);

  return (
    <Box as="container" direction="column" htmlProps={{ id: "countdown" }}>
      <Typography tags="h4" align="center" className="font-black uppercase tracking-wider">Hitung mundur</Typography>

      <Gap height="h-10" />

      <div
        className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-16"
        data-aos="zoom-in"
        data-aos-duration={1500}
      >
        <Box as="div" direction="column" items="center" className="gap-4">
          <h4 className="font-ephesis text-6xl">{days}</h4>
          <Typography tags="p">Days</Typography>
        </Box>

        <Box as="div" direction="column" items="center" className="gap-4">
          <h4 className="font-ephesis text-6xl">{hours}</h4>
          <Typography tags="p">Hours</Typography>
        </Box>

        <Box as="div" direction="column" items="center" className="gap-4">
          <h4 className="font-ephesis text-6xl">{minutes}</h4>
          <Typography tags="p">Minutes</Typography>
        </Box>

        <Box as="div" direction="column" items="center" className="gap-4">
          <h4 className="font-ephesis text-6xl">{seconds}</h4>
          <Typography tags="p">Seconds</Typography>
        </Box>
      </div>

    </Box>
  );
}
