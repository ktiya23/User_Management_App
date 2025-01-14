import {
    Container,
    Typography,
    Button,
    CircularProgress,
    Box,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const UserDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
        setLoading(false);
      };
      fetchUsers();
    }, [id]);
  
    if (loading) return <CircularProgress />;
    if (!user) return <Typography>No user data available</Typography>;
  
    return (
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          justifyContent: "center", // Horizontally center
          alignItems: "center", // Vertically center
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {user.name}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Username: {user.username}
          </Typography>
          <Typography sx={{ textAlign: "center" }}>Email: {user.email}</Typography>
          <Typography sx={{ textAlign: "center" }}>Phone: {user.phone}</Typography>
          <Typography sx={{ textAlign: "center" }}>Address: {user.address.street}, {user.address.city}</Typography>
          <Typography sx={{ textAlign: "center" }}>Company: {user.company.name}</Typography>
          <Typography sx={{ textAlign: "center" }}>Website: {user.website}</Typography>
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{ display: "block", margin: "20px auto" , backgroundColor:"#A28089" }} 
          >
            Go Back
          </Button>
        </Container>
      </Box>
    );
  };
  
  export default UserDetailPage;
  