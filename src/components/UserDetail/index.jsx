import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);

    if (!user) {
        return (
            <Typography variant="h5" style={{ padding: "20px" }}>
                User not found
            </Typography>
        );
    }

    return (
        <div className="user-detail-container" style={{ padding: "20px" }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {user.first_name} {user.last_name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                        <strong>Location:</strong> {user.location}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                        <strong>Occupation:</strong> {user.occupation}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        <strong>Description:</strong> {user.description}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/photos/${user._id}`}
                        style={{ marginTop: "10px" }}
                    >
                        View Photos
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default UserDetail;
