import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/Table.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TodoContext from "../contexts/TodoContext";

const useStyles = makeStyles((theme) => {
  return {
    "@global": {
      "*::-webkit-scrollbar": {
        display: "none",
      },
    },
    tableContainer: {
      maxHeight: "70%",
      minWidth: 700,
      maxWidth: 780,
      margin: "auto",
      marginTop: 60,
      overflow: "overlay",
      textAlign: "center",
    },
    tableHeaderCell: {
      fontWeight: "bold",
      textAlign: "center",
    },
    TableCell: {
      textAlign: "center",
      fontSize: "1rem",
    },
  };
});

export default function BasicTable() {
  const { todos, setTodos } = React.useContext(TodoContext);
  const classes = useStyles();

  const setToggleStatus = (index) => {
    const newTodos = todos.map((todo, ind) => {
      if (ind === index) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="center-content">
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>ID</TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">
                Tên Công Việc
              </TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">
                Mức độ
              </TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">
                Trạng thái
              </TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">
                Chức năng
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow
                key={todo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className={classes.TableCell}
                  component="th"
                  scope="row"
                >
                  {index + 1}
                </TableCell>
                <TableCell className={classes.TableCell} align="right">
                  {todo.work}
                </TableCell>
                <TableCell align="right" className={classes.TableCell}>
                  <Button variant="outlined" size="small">
                    {todo.level}
                  </Button>
                </TableCell>
                <TableCell align="right" className={classes.TableCell}>
                  <Button
                    size="small"
                    variant="outlined"
                    color={todo.isCompleted ? "successStatus" : "error"}
                    onClick={() => setToggleStatus(index)}
                  >
                    {todo.isCompleted ? "Đã hoàn thành" : "Chưa hoàn thành"}
                  </Button>
                </TableCell>
                <TableCell align="right" className={classes.TableCell}>
                  <Button
                    variant="outlined"
                    color="warning"
                    style={{ marginRight: 6 }}
                    size="small"
                  >
                    Sửa
                  </Button>
                  <Button variant="outlined" color="error" size="small">
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
