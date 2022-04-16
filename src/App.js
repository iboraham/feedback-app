import React from "react";
import Header from "./components/Header";
import Card from "./components/shared/Card";
import Grid from "@mui/material/Grid";
import FeedbackList from "./components/FeedbackList";
import "./index.css";

export default function App() {
  const [reverse, setReverse] = React.useState(false);
  return (
    <Grid container direction="column">
      <Grid item>
        <Header title="Feedback App" />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <FeedbackList />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}
