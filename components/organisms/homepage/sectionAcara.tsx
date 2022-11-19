import { useState } from "react";
// Components
import { Box, Gap, Typography, Button, Dialog } from "../../atoms";
// Configs
import { APP_CONTENT } from "../../../config";
// Utils
import { formatDateTime, useWindowDimensions } from "../../../utils";

export default function SectionAcara() {
  const [open, setOpen] = useState(false);
  const [map, setMap] = useState("");

  const { width } = useWindowDimensions();

  const handleDialogOpen = (url: string) => {
    setMap(url);
    setOpen(!open);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box as="container" direction="column" htmlProps={{ id: "ceremony" }} className="gap-16">
        <Typography tags="h4" align="center" className="font-black tracking-wider">Akad Nikah & Resepsi</Typography>

        <Box as="div" direction="column" className="gap-14">
          <Box as="div" direction="column" items="center" className="gap-4">
            <Typography tags="p" align="center" className="font-black">Akad Nikah</Typography>
            <Typography tags="h2" align="center" className="font-ephesis">
              {formatDateTime(APP_CONTENT.akad.date, "dddd, dd MMMM y")}
            </Typography>
            <Typography tags="p" align="center">
              Pukul
              {" "}
              {APP_CONTENT.akad["start-time"]}
              {" "}
              -
              {" "}
              {APP_CONTENT.akad["end-time"]}
              {" "}
            
            </Typography>
            <Typography tags="p" align="center">
              {APP_CONTENT.akad.location}
            </Typography>
            <Button
              label="See on map"
              variant="line"
              size="sm"
              buttonProps={{
                // onClick: () => { handleDialogOpen(APP_CONTENT.akad.map); },
              }}
            />
          </Box>

          <Box as="div" direction="column" items="center" className="gap-4">
            <Typography tags="p" align="center" className="font-black">Resepsi</Typography>
            <Typography tags="h2" align="center" className="font-ephesis">
              {formatDateTime(APP_CONTENT.resepsi.date, "dddd, dd MMMM y")}
            </Typography>
            <Typography tags="p" align="center">
              Pukul
              {" "}
              {APP_CONTENT.resepsi["start-time"]}
              {" "}
              -
              {" "}
              {APP_CONTENT.resepsi["end-time"]}
              {" "}
            </Typography>
            <Typography tags="p" align="center">
              {APP_CONTENT.resepsi.location}
            </Typography>
            <Button
              label="See on map"
              variant="line"
              size="sm"
              buttonProps={{
                // onClick: () => { handleDialogOpen(APP_CONTENT.resepsi.map); },
              }}
            />
          </Box>

          {APP_CONTENT.unduh && (
            <Box as="div" direction="column" items="center" className="gap-4">
              <Typography tags="p" align="center" className="font-black">Resepsi II</Typography>
              <Typography tags="h2" align="center" className="font-ephesis">
                {formatDateTime(APP_CONTENT.unduh.date, "dddd, dd MMMM y")}
              </Typography>
              <Typography tags="p" align="center">
                Pukul
                {" "}
                {APP_CONTENT.unduh["start-time"]}
                {" "}
                -
                {" "}
                {APP_CONTENT.unduh["end-time"]}
                {" "}
              </Typography>
              <Typography tags="p" align="center">
                {APP_CONTENT.unduh.location}
              </Typography>
              <Button
                label="See on map"
                variant="line"
                size="sm"
                buttonProps={{
                  onClick: () => { handleDialogOpen(APP_CONTENT.unduh.map); },
                }}
              />
            </Box>
          )}
        </Box>

      </Box>

      <Dialog
        open={open}
        size="lg"
        onClose={handleDialogClose}
      >
        <Box as="div" direction="column" htmlProps={{ style: { height: width > 640 ? 550 : 400 } }}>
          {/* https://google-map-generator.com/ */}
          <iframe
            title="Map"
            height={width > 640 ? 550 : 400}
            src={map}
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
        </Box>
      </Dialog>
    </>
  );
}
