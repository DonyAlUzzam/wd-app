import Image from "next/image";
// Components
import { Box, Gap, Typography, Button } from "../../atoms";
// Configs
import { APP_CONTENT } from "../../../config";

export default function SectionUcapan() {
  return (
    <Box as="container" direction="column" htmlProps={{ id: "wishing" }} className="gap-14">
      <Typography tags="h4" align="center" className="font-black uppercase tracking-wider">Do'a & Ucapan</Typography>

      <Box as="div" direction="column" items="center" className="gap-8">
        <Typography tags="p" align="center" className="italic tracking-widest w-4/5">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          {" "}
          Semoga Allah mengabulkan do’a kita dan Allah selalu merahmati serta menjaga kita.
        </Typography>
        <Typography tags="p" align="center">Turut berbahagia,</Typography>
        <Typography tags="p" align="center">Segenap Keluarga Besar,</Typography>
      </Box>

      <Box as="div" direction="column" items="center" className="gap-14">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10">
          <Typography tags="h1" className="font-ephesis">
            {APP_CONTENT.bride.woman.name}
          </Typography>
          <Typography tags="h1" className="font-ephesis">&</Typography>
          <Typography tags="h1" className="font-ephesis">
            {APP_CONTENT.bride.man.name}
          </Typography>
        </div>

        <Button
          label="Send Whishing"
          size="md"
          variant="primary"
          buttonProps={{
            onClick: () => {
              window.open("https://api.whatsapp.com/send?phone=+6282183761349", "_blank");
            },
          }}
        />
      </Box>

    </Box>
  );
}
