import React from "react";
import CustomeContainer from "./CustomeContainer";
import { Box, Grid2, Rating, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Rated: React.FC = () => {
  return (
    <CustomeContainer>
      <Grid2 container padding={10} spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box sx={{ width: "100%", maxWidth: "188px", textAlign: "center" }}>
              <Stars />
              <Typography sx={{ fontSize: "25px", fontWeight: 900 }}>
                4
                <Box component="span" sx={{ fontSize: "16px" }}>
                  /5
                </Box>
              </Typography>
              <Typography sx={{ fontWeight: 900, fontSize: "14px" }}>
                Basert på 5742 stemmer
              </Typography>
            </Box>
          </Stack>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 8 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack spacing={1}>
            <Stack flexDirection={"row"} gap={5}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 900,
                  letterSpacing: "1px",
                  display: "flex",
                  gap: 2,
                }}
              >
                Peter Joyce
                <Box component="span" sx={{ fontSize: "16px" }}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                    icon={
                      <StarIcon
                        sx={{ color: "text.primary" }}
                        fontSize="inherit"
                      />
                    }
                  />
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 900,
                  letterSpacing: "1px",
                }}
              >
                6.1.2025
              </Typography>
            </Stack>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 300, letterSpacing: "1px" }}
            >
              "Rask og profesjonell service!"
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </CustomeContainer>
  );
};

const Stars: React.FC = () => {
  return (
    <Rating
      name="half-rating-read"
      defaultValue={4}
      precision={0.5}
      readOnly
      emptyIcon={
        <StarIcon
          sx={{ color: "text.link" }}
          style={{ opacity: 0.55 }}
          fontSize="inherit"
        />
      }
    />
  );
};

export default Rated;
