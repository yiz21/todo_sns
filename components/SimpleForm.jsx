import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: '100%',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
}));

export default function SimpleForm({placeholder, handlePost}) {
  const classes = useStyles();
  const [value, setValue] = useState({name: ''});

  const handleKeyPress = (e) => {
    if ( e.which === 13) {
      handlePost(value);
    }
  }
  
  return (
    <Input
      placeholder={placeholder}
      className={classes.inputField}
      variant="outlined"
      onChange={(e)=> setValue({ name: e.target.value })}
      value={value.name || ''}
      onKeyPress={(e)=>handleKeyPress(e)}
  />
  );
}