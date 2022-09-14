import { Box } from "@mui/material"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface WelcomeMessage{
  position: string;
  country?: string;
}
const WellComeMessage = ({ position, country = 'vietnam' }: WelcomeMessage) => {
  const { authInfo } = useContext(AuthContext)
  return (
    <Box mb={1}>
      Wellcome {authInfo.userName} - {position} from {country}
    </Box>
  );
}

export default WellComeMessage