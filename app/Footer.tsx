import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomeContainer from "./components/CustomeContainer";
import {
  imagePhoneSrc,
  imagePostnordUrl,
  imageVappsUrl,
  imageVisaUrl,
} from "./utils/GlobalAssets";

const footerItems = [
  "prisløfte",
  "kjøpe og hent",
  "komfortgaranti",
  "finansiering",
  "åpent kjøp",
];

const footerImageItems = [imagePostnordUrl, imageVisaUrl, imageVappsUrl];

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "200px",
        width: "100%",
        bgcolor: "background.footer",
      }}
    >
      <CustomeContainer>
        <Stack spacing={3} justifyContent={"center"} alignItems={"center"}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </Stack>
      </CustomeContainer>
    </Box>
  );
};

const SectionOne: React.FC = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      flexWrap="wrap"
      width="100%"
      sx={{
        justifyContent: "center",
        gap: { xs: 10, sm: 10, lg: 15, xl: 20 },
      }}
    >
      {[...Array(5)].map((_, index) => (
        <Stack textAlign={"center"} spacing={2} key={index}>
          <Image
            key={index}
            alt="landscaped_phone"
            src={imagePhoneSrc}
            height={100}
            width={100}
          />
          <Typography>{footerItems[index]}</Typography>
        </Stack>
      ))}
    </Box>
  );
};
const SectionTwo: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "700px",
        height: "135px",
      }}
    >
      <Image
        alt="footer_image"
        src="/images/footer_image.png"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 600px) 100vw, 33vw"
      />
    </Box>
  );
};

const SectionThree: React.FC = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      flexWrap="wrap"
      width="100%"
      sx={{ justifyContent: "center", gap: { xs: 2, sm: 10, lg: 15, xl: 20 } }}
    >
      {footerImageItems?.map((imgurl, index) => {
        return (
          <Image
            key={index}
            alt="landscaped_phone"
            src={imgurl}
            height={100}
            width={130}
          />
        );
      })}
    </Box>
  );
};

export default Footer;
