import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { 
    FormControl,
    InputLabel,
    Input,
    IconButton,
    Button
    } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
  const [input,setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {
      db.collection('messages').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
      })
  }, [])

  useEffect(() => {
      setUsername(prompt('Please enter your name'));
    
  }, [])

  console.log(messages);
  
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    });
    
    setInput('');
  }

  

  return (
    
    <div className="App">
      <img  src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h1>Facebook clone Messenger 🚀</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
           className="app__input"
           placeholder="Enter a messages..."
           value={input} 
           onChange={event => setInput(event.target.value)} 
            />
          <IconButton
            variant="outlined"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
            className="app__iconButton"
            >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      
     <FlipMove>
     {
      messages.map(({id, message}) => {
        
        return <Message key={id} id={id}  username={username} message={message} />
        })
      }
     </FlipMove>
    </div>
  );
}

export default App;
