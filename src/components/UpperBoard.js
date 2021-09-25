import { Button, IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

export default function UpperBoard() {
  const { isOpened, setOpen } = useContext(TodoContext);

  const handleAddNew = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="UpperBoard">
      <TextField
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button disabled={isOpened} variant="outlined" onClick={handleAddNew}>
        Thêm công việc mới
      </Button>
      <div className="right-section">
        <HelpOutlineOutlinedIcon className="HelpOutlineOutlinedIcon" />
        <NotificationsNoneOutlinedIcon className="NotificationsNoneOutlinedIcon" />
        <p>bui quang duong</p>
        <ArrowDropDownOutlinedIcon className="ArrowDropDownOutlinedIcon" />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
}
