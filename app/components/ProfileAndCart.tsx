import { Badge, Stack } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export const ProfileAndCart: React.FC = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: "15px",
      }}
    >
      <PermIdentityOutlinedIcon sx={{ fontSize: "37px" }} />
      <Badge badgeContent={4} color="info">
        <LocalMallOutlinedIcon sx={{ fontSize: "37px" }} />
      </Badge>
    </Stack>
  );
};
