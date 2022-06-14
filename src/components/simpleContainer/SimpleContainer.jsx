import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from "./simpleContainer.module.css";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  className={`${styles.Container}`}>
        <Box className={`${styles.Box}`} />
      </Container>
    </React.Fragment>
  );
}