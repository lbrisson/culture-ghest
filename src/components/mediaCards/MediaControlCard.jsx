import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import styles from './mediaCard.module.css';

export default function MediaControlCard() {
  const theme = useTheme();



  return (
    <Card className={`${styles.Card}`}>
      <Box className={`${styles.BoxOuter}`}>
        <CardContent className={`${styles.CardContent}`}>
          <Typography className={`${styles.Typography}`} component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography className={`${styles.Typography}`} variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box  className={`${styles.BoxInner}`}>
          <IconButton  className={`${styles.PrevBtn}`} aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={`${styles.PlayBtn}`} />
          </IconButton>
          <IconButton className={`${styles.SkipBtn}`} aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        className={`${styles.CardMedia}`}
       src="../../.././public/retro.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
