import { Button, Container, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';

//This function is ChatGPT created :D
function secondsToHoursMinutesSeconds(seconds) {
  seconds = Number(seconds)
  if (isNaN(seconds) || Number(seconds) < 0) return {
    hours: '-',
    minutes: '-',
    seconds: '-'
  }

  // Calculate hours
  const hours = Math.floor(seconds / 3600);
  // Calculate remaining minutes
  const remainingMinutes = Math.floor((seconds % 3600) / 60);
  // Calculate remaining seconds
  const remainingSeconds = seconds % 60;

  return {
    hours,
    minutes: remainingMinutes,
    seconds: remainingSeconds
  };
}

function App() {

  const [seconds, setSeconds] = useState(0)
  const [time, setTime] = useState(
    {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  )

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Paper sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', px: 3 }}>
        <Typography sx={{ my: 3 }}>Hours calculator</Typography>
        <TextField
          label="seconds here"
          id="outlined-start-adornment"
          sx={{ mb: 2, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start" sx={{ pr: 1.75 }}>sec</InputAdornment>,
            sx: { flexDirection: 'row-reverse' }
          }}
          inputProps={{
            sx: { pr: 0 }
          }}
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        <Button variant="outlined" size="small" onClick={() => setTime(secondsToHoursMinutesSeconds(seconds))}>
          Convert
        </Button>
        <Typography sx={{ my: 2 }}>{`${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds.`}</Typography>
      </Paper>
    </Container>
  );
}

export default App;
