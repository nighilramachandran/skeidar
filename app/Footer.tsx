import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomeContainer from "./components/CustomeContainer";
import Logo from "./components/Logo";
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

console.log("footerImageItems", footerImageItems[0]);

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
        <Stack spacing={5} justifyContent={"center"} alignItems={"center"}>
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
          <Logo />
          <Box
            display={"flex"}
            flexDirection="row"
            flexWrap="wrap"
            width="100%"
            sx={{ justifyContent: "center", gap: 10 }}
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
        </Stack>
      </CustomeContainer>
    </Box>
  );
};

export default Footer;
