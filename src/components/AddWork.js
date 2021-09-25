import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuItem, TextField } from "@mui/material";
import { LEVEL } from "../common/const";
import TodoContext from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

export default function AddWork() {
  const { setOpen, work, setWork, setLevel, level, setTodos } =
    React.useContext(TodoContext);

  const workOnChange = (e) => {
    setWork(e.target.value);
  };
  const levelOnChange = (e) => {
    setLevel(e.target.value);
  };

  const addNew = () => {
    const newWork = {
      id: uuidv4(),
      work,
      level,
      isCompleted: false,
    };
    setTodos((pre) => [...pre, newWork]);
    setWork("");
  };
  return (
    <Card sx={{ maxWidth: 300, height: "100%" }}>
      <CardContent>
        <div className="crud">
          <Typography
            style={{ textAlign: "center", opacity: 0.7, marginBottom: 20 }}
          >
            Thêm công việc mới:
          </Typography>

          <TextField
            label="Thêm công việc"
            variant="outlined"
            style={{ width: "100%", marginBottom: 10 }}
            value={work}
            onChange={(e) => workOnChange(e)}
          />
          <TextField
            select
            label="Select"
            helperText="Vui lòng chọn mức độ công việc"
            defaultValue={level}
            value={level}
            onChange={(e) => levelOnChange(e)}
          >
            {LEVEL.map((lev) => (
              <MenuItem key={lev.label} value={lev.label}>
                {lev.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" onClick={addNew}>
          Thêm
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Hủy
        </Button>
      </CardActions>
    </Card>
  );
}
