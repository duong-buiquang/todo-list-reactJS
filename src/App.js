import "./App.css";
import BottomLeft from "./components/BottomLeft";
import LeftSide from "./components/LeftSide";
import Main from "./components/Main";
import MainContent from "./components/MainContent";
import MiddleLeft from "./components/MidldeLeft";
import BasicTable from "./components/Table";
import TopLeft from "./components/TopLeft";
import UpperBoard from "./components/UpperBoard";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import AddWork from "./components/AddWork";
import { LEVEL } from "./common/const";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
    infoc: {
      main: "#000000",
    },
    successStatus: {
      main: "#4caf50",
    },
  },
});

function App() {
  const [isOpened, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [work, setWork] = useState("");
  const [level, setLevel] = useState(LEVEL[0].label);

  useEffect(() => {
    const ifTodos = JSON.parse(localStorage.getItem("todos"));
    if (ifTodos.length > 0) {
      setTodos(ifTodos);
    }
  }, []);

  const context = {
    isOpened,
    setOpen,
    todos,
    setTodos,
    work,
    setWork,
    level,
    setLevel,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main>
          <LeftSide>
            <TopLeft></TopLeft>
            <MiddleLeft></MiddleLeft>
            <BottomLeft></BottomLeft>
          </LeftSide>
          <MainContent>
            <TodoProvider value={context}>
              <UpperBoard></UpperBoard>
              <div
                style={{
                  display: "flex",
                  marginTop: 30,
                  justifyContent: "space-evenly",
                }}
              >
                {isOpened && <AddWork />}
                <BasicTable />
              </div>
            </TodoProvider>
          </MainContent>
        </Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
