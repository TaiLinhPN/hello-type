import { Box } from "@mui/material"

interface WelcomeMessage{
  position: string;
  country?: string;
}
const WellComeMessage = ({position, country= 'vietnam'}:WelcomeMessage) => {
  return <Box mb={1}>Wellcome {position} from { country}</Box>;
}

export default WellComeMessage