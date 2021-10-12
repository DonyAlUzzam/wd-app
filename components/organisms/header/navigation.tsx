import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import cx from "classnames";
// Components
import { Box, Button } from "../../atoms";
// Configs
import { Routes } from "../../../config";
import { RoutesDataTypes } from "../../../config/datatype";
// Utils
import { scrollTo, useWindowDimensions } from "../../../utils";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > 0 && width < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const containerclass = cx(
    "flex flex-row items-center",
    {
      "justify-around w-full": isMobile,
    },
  );

  const RenderNavItem = ({ path, name, title }: RoutesDataTypes) => {
    const handleScrollTo = () => {
      scrollTo({ id: name, duration: 2000 });
    };

    if (isMobile) {
      const icons: any = {
        home: "arch-icon.svg",
        brides: "marriage-icon.svg",
        ceremony: "weddingday-icon.svg",
        wishing: "dove-icon.svg",
        gift: "gift-icon.svg",
      };

      return (
        <button
          className="flex flex-col bg-none outline-none"
          onClick={handleScrollTo}
        >
          <Image src={`/images/icons/${icons[name]}`} alt="img" width={30} height={30} />
        </button>
      );
    }

    return (
      <Button
        key={path}
        label={title}
        size="sm"
        variant="link"
        className="font-medium text-lg"
        buttonProps={{
          onClick: handleScrollTo,
        }}
      />
    );
  };

  return (
    <div
      className={containerclass}
      // data-aos="fade-down"
      // data-aos-duration={1500}
    >
      {Routes.filter((route) => { return route.placement.includes("header"); }).map(
        (route: RoutesDataTypes, i: number) => {
          return (
            <RenderNavItem
              key={route.path}
              path={route.path}
              name={route.name}
              title={route.title}
            />
          );
        },
      )}
    </div>
  );
}
