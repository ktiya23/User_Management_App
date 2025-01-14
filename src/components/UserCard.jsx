import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <Card>
        <CardContent>
            <Typography>{user.name}</Typography>
            <Typography>Email:{user.email}</Typography>
            <Typography>City:{user.address.city}</Typography>

            <Button variant='contained' LinkComponent={Link} to={`/user/${user.id}`} sx={{mt:2}}>
                View Details
            </Button>
        </CardContent>
    </Card>
  )
}

export default UserCard
