import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { Dispatch, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface LoginProps {
  isOpen: boolean;
  handleClose: Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ isOpen, handleClose }: LoginProps) => {
  const { toggleAuth } = useContext(AuthContext);
  const [useName, setUserName] = useState("");

  const onUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const onLoginSubmid = () => {
    toggleAuth(useName);
    setUserName("");
    handleClose(false);
  };
  return (
    <Dialog open={isOpen} onClose={() => handleClose(false)}>
      <DialogContent>
        <TextField
          label="User name"
          value={useName}
          onChange={onUserNameChange}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={onLoginSubmid}
          disabled={useName === ""}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
