import logo from './logo.svg';
import './App.css';
import  ButtonGroup from "@mui/material/ButtonGroup"
import  Button from "@mui/material/Button"
import SaveIcon from "@mui/material/Button"
import DeleteIcon from "@mui/material/Button"
import TextField  from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
function App() {
  return (
    <main>
      <div
       className="App">
      <header className="App-header">

        <Typography
        variant="h2"
        >WELCOME TO CODE CLASS</Typography>
        <h1>SIT 725 FORUM 2022</h1>
        <h2>Kindly write your student ID</h2>
        <TextField
        variant='outlined'
        type= "string"
        color='primary'
        />
        <h3>Welcome</h3>
        <ButtonGroup>
        <Button 
        startIcon={<SaveIcon/>}
        href="#" 
        variant="contained"
         color="secondary">
MYSPACE
        </Button>
        <Button 
        StartIcon={<DeleteIcon/>}
        href="#" 
        variant="contained"
         color="primary">
     NOTES
        </Button>
        <Button 
        href="#" 
        variant="contained"
         color="primary">
    MEMBERS LIST
        </Button>
        <Button 
        href="#" 
        variant="contained"
         color="primary">
       RECORDINGS
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonGroup>
        <Button 
        variant="contained"
         color="secondary">
MY FILES
        </Button>
        <Button 
        variant="contained"
         color="primary">
     PRACTICALS
        </Button>
        <Button 
        variant="contained"
         color="primary">
    LECTURES
        </Button>
        <Button 
        variant="contained"
         color="primary">
       WEEK 
        </Button>
        </ButtonGroup>
      </header>
    </div>
    </main>
  );
}

export default App;
