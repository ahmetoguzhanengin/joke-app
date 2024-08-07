import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Joke = ({ joke, setClick, toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  console.log("Component joke:", joke);

  const clickHandler = () => {
    setClick((prev) => !prev);
    console.log("Clicked joke:", joke);
  };

  const cardContent = joke && (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          <b>Category</b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {joke.category}
        </Typography>
        {joke.type === 'single' ? (
          <Typography variant="body1">
            {joke.joke}
          </Typography>
        ) : (
          <>
            <Typography variant="body1">
              {joke.setup}
            </Typography>
            <Typography variant="body1">
              {joke.delivery}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={clickHandler}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={toggleTheme}
          sx={{ marginLeft: 2 }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      
    }}>
      <Card variant="outlined">{cardContent}</Card>
    </Box>
  );
};

export default Joke;
