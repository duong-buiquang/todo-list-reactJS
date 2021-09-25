import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function BottomLeft() {
  return (
    <div className="BottomLeft">
      <div className="SettingsIcon icon">
        <SettingsIcon />
        <p>Settings</p>
      </div>
      <div className="LogoutIcon icon">
        <LogoutIcon />
        <p>Logout</p>
      </div>
    </div>
  );
}
