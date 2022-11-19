import Link from "next/link";
import Image from "next/image";
// Components
import { Box, Gap, Typography, Button } from "../../atoms";
// Configs
import { APP_CONTENT } from "../../../config";
import { BankDataTypes } from "../../../config/datatype";
import ReactPlayer from "react-player";

export default function SectionSendGift() {
  return (
    <Box as="container" direction="column" htmlProps={{ id: "gift" }} className="gap-14">
      {/* <Typography tags="h4" align="center" className="font-black uppercase tracking-wider">Kirim Kado</Typography> */}

      <Box as="div" direction="column" items="center" className="gap-4">
        <Typography tags="p" align="center" className="italic tracking-widest">
          Terima kasih atas doa dan restu yang telah anda berikan.
        </Typography>
        {/* <Typography tags="p" align="center">
          Jika anda ingin mengirimkan kado nikah, silahkan kirim dengan cara dibawah ini.
        </Typography> */}
      </Box>

      <Box as="div" direction="column" items="center" justify="center">
        <ReactPlayer url="https://youtu.be/85v6ZwDR0uY" />
      </Box>
    </Box>
  );
}
