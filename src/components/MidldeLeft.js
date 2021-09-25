import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";

export default function MiddleLeft() {
  return (
    <div className="MiddleLeft">
      <div className="HomeOutlinedIcon icon">
        <HomeOutlinedIcon style={{ fill: "black" }} />
        <p>Overview</p>
      </div>
      <div className="EqualizerOutlinedIcon icon">
        <EqualizerOutlinedIcon style={{ fill: "black" }} />
        <p>Stats</p>
      </div>
      <div className="FolderOutlinedIcon icon selected">
        <FolderOutlinedIcon />
        <p>Projects</p>
      </div>
      <div className="ChatBubbleOutlineOutlinedIcon icon">
        <ChatBubbleOutlineOutlinedIcon />
        <p>Chat</p>
      </div>
      <div className="ScheduleIcon icon">
        <ScheduleIcon />
        <p>Calendar</p>
      </div>
    </div>
  );
}
