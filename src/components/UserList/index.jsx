import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div className="user-list-container">
        <Typography variant="h6" style={{ padding: "10px" }}>
          Users
        </Typography>
        <List component="nav">
          {users.map((user) => (
            <React.Fragment key={user._id}>
              <ListItem
                className="user-list-item"
                component={Link}
                to={`/users/${user._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary={`${user.first_name} ${user.last_name}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    );
}

export default UserList;
