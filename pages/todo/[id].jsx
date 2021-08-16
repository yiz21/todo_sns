// import React, { useState, useEffect, useContext } from 'react';
// import {useTodo} from '../../data/useTodo'
// import { Navigation } from '../../data/navigation';
// import { makeStyles } from '@material-ui/core/styles';
// import TreeView from '@material-ui/lab/TreeView';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import TreeItem from '@material-ui/lab/TreeItem';
// import { useRouter } from 'next/router';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 400,

//   },
//   content: {
//     fontSize: '2rem',
//   }
// });

// export default function TodoShow() {
//   const router = useRouter();
//   const { id } = router.query
//   const { todo, error } = useTodo(id);
//   const nav = useContext(Navigation);
//   const [selected, setSelected] = useState([]);
//   const [expanded, setExpanded] = useState([]);
//   const classes = useStyles();

//   const handleSelect = (event, nodeIds) => {
//     setSelected(nodeIds);
//   };

//   const handleToggle = (event, nodeIds) => {
//     setExpanded(nodeIds);
//   };

//   useEffect(() => {
//     nav.changeNav(0);
//   }, []);

//   const renderTree = (nodes) => {
//     return (
//       <TreeItem
//         className={classes.content}
//         key={`${nodes.id}`}
//         nodeId={`${nodes.id}`}
//         label={nodes.name}
//       >
//         {Array.isArray(nodes.todos) ? nodes.todos.map((node) => renderTree(node)) : null}
//       </TreeItem>
//     )
//   }

//   console.log(todo)

//   console.log(selected);
//   console.log(expanded);

//   return (
//     <>
//       { 
//         todo &&
//         <TreeView
//           className={classes.root}
//           defaultCollapseIcon={<ExpandMoreIcon />}
//           defaultExpandIcon={<ChevronRightIcon />}
//           selected={selected}
//           expanded={expanded}
//           onNodeSelect={handleSelect}
//           onNodeToggle={handleToggle}
//         >
//           {renderTree(todo)}
//         </TreeView>
//       }
//     </>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import {useTodo} from '../../data/useTodo'
import { Navigation } from '../../data/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}