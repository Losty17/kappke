import Sidebar from "./Sidebar";
import Content from "./Content";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid>
      <Sidebar />
      <Content />
    </Grid>
  );
};

export default App;
