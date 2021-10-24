import React, { useState, useEffect, useContext } from 'react';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '5rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  searchField: {
    width: '100%',
  },
}));


export default function SearchForm() {
  const[values, setValues] = useState({ visibleTodo: [], update: false });

  const changeVisibleTodo = (id, value) => {
    let updateTodos = values["visibleTodo"];
    updateTodos = updateTodos.map(t => {
      if (t.id == id) {
        t.name = value
        return t;
      }
      return t;
    });
    setValues({ ...values, ['visibleTodo']: updateTodos });
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  <>
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Input
          placeholder="検索"
          className={classes.searchField}
          variant="outlined"
          startAdornment={<SearchIcon />}
          onChange={handleChange('searchWord')}
          value={values.searchWord}
        />
      </CardContent>
    </Card>
  </>
}