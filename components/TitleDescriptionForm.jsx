import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: '100%',
    paddingTop: '2rem',
  },
  descriptionForm: {
    width: '100%',
    marginTop: '2rem',
    paddingBottom: '0.5rem',
  }
}));

export default function TitleDescriptionForm({placeholder, handlePost}) {
  const classes = useStyles();
  const [value, setValue] = useState({name: '', description: ''});

  const handleKeyPress = (e) => {
    if ( e.which === 13) {
      handlePost(value);
    }
  }
  
  return (
    <>
      <Input
        placeholder={'タイトル'}
        className={classes.inputField}
        variant="outlined"
        onChange={(e)=> setValue({ ...value, name: e.target.value })}
        value={value.name || ''}
        autoFocus={true}
      />
      <TextField
        id="outlined-error-helper-text"
        className={classes.descriptionForm}
        label="詳細"
        placeholder={'詳細を記入'}
        // defaultValue="Hello World"
        onChange={(e)=> setValue({ ...value, description: e.target.value })}
        value={value.description || ''}
        onKeyPress={(e)=>handleKeyPress(e)}
        variant="outlined"
        rows={4}
        multiline
      />
    </>
  );
}