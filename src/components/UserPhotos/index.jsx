import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Format date/time to user-friendly string
 */
function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  if (!user) {
    return (
      <Typography variant="h5" style={{ padding: "20px" }}>
        User not found
      </Typography>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <Typography variant="h5" style={{ padding: "20px" }}>
        No photos found for {user.first_name} {user.last_name}
      </Typography>
    );
  }

  return (
    <div className="user-photos-container" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Photos of {user.first_name} {user.last_name}
      </Typography>
      {photos.map((photo) => (
        <Card key={photo._id} className="photo-card">
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt="User photo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <CardContent>
            <Typography variant="caption" color="textSecondary">
              {formatDateTime(photo.date_time)}
            </Typography>

            {photo.comments && photo.comments.length > 0 && (
              <>
                <Typography variant="h6" style={{ marginTop: "15px" }}>
                  Comments
                </Typography>
                <Divider style={{ marginBottom: "10px" }} />
                <List>
                  {photo.comments.map((comment) => (
                    <ListItem
                      key={comment._id}
                      alignItems="flex-start"
                      style={{ paddingLeft: 0 }}
                    >
                      <ListItemText
                        primary={
                          <>
                            <Link
                              to={`/users/${comment.user._id}`}
                              className="comment-author-link"
                            >
                              {comment.user.first_name} {comment.user.last_name}
                            </Link>
                            <Typography
                              component="span"
                              variant="caption"
                              color="textSecondary"
                              style={{ marginLeft: "10px" }}
                            >
                              {formatDateTime(comment.date_time)}
                            </Typography>
                          </>
                        }
                        secondary={
                          <Typography variant="body2" style={{ marginTop: "5px" }}>
                            {comment.comment}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
