import React from 'react';
import { Container } from '@mui/material';

const client_id = 'e22082cdc99a4af8a1860788ee93fc4e';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function SpotifyLogin() {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
            <a className='btn btn-success btn-lg' href={AUTH_URL}>Login into Spotify</a>
        </Container>
        
      )
}
