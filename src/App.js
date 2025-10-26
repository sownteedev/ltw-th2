import './App.css';

import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = (props) => {
  return (
      <Router>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <div className="main-topbar-buffer" />
            <Grid item sm={3}>
              <Paper className="main-grid-item">
                <UserList />
              </Paper>
            </Grid>
            <Grid item sm={9}>
              <Paper className="main-grid-item">
                <Routes>
                  <Route
                      path="/users/:userId"
                      element = {<UserDetail />}
                  />
                  <Route
                      path="/photos/:userId"
                      element = {<UserPhotos />}
                  />
                  <Route path="/users" element={
                    <Typography variant="h5" style={{ padding: "20px" }}>
                      Welcome to the Photo Sharing App! Select a user from the list to view their details.
                    </Typography>
                  } />
                  <Route path="/" element={<Navigate to="/users" replace />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
  );
}

export default App;
