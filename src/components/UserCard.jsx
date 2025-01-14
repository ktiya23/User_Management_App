import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold" color="primary.main">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          City: {user.address.city}
        </Typography>
        <Button
          size="small"
          sx={{ color: "#ff1d58" }} 
          component={Link}
          to={`/user/${user.id}`}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
