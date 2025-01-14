import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Pagination,
  Box,
  Typography,
  Grid2,
} from "@mui/material";
import UserCard from "../components/UserCard";

const HomePage = () => {
  const { users, setUsers, loading, setLoading, error, setError } =
    useContext(UserContext);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const Users_Per_Page = 3;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [setUsers, setLoading, setError]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredUsers].sort((a, b) =>
      order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sorted);
  };

  const paginatedUser = filteredUsers.slice(
    (page - 1) * Users_Per_Page,
    page * Users_Per_Page
  );

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <Container sx={{ mt: 10 }}>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <TextField
          label="Search by name"
          value={searchQuery}
          onChange={handleSearch}
          margin="normal"
          variant="outlined"
          sx={{ width: "300px" }}
        />
        <Button variant="contained" onClick={() => handleSort("asc")}>
          Sort A-Z
        </Button>
        <Button
          variant="contained"
          sx={{ ml: 2 }}
          onClick={() => handleSort("desc")}
        >
          Sort Z-A
        </Button>
      </Box>
      <Typography textAlign="center" variant="h4" color="#0049B7" sx={{ mt: 2, fontWeight: "bold" }}>
        USERS LIST
      </Typography>
      <Grid2 container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
        {paginatedUser.map((user) => (
          <Grid2 item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid2>
        ))}
      </Grid2>
      <Pagination
        count={Math.ceil(filteredUsers.length / Users_Per_Page)}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ mt: 3, display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default HomePage;
