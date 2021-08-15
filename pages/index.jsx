import React, { useEffect, useContext } from 'react';
import useTodo from '../data/useTodo'
import { Navigation } from '../data/navigation';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    // height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();
  const { todos, error } = useTodo();
  const nav = useContext(Navigation);
  const [selected, setSelected] = React.useState([]);

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  useEffect(() => {
    nav.changeNav(0);
  }, []);

  const renderTree = (nodes) => {
    return (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.todos) ? nodes.todos.map((node) => renderTree(node)) : null}
      </TreeItem>
    )
  }

  return (
    <>
      { 
        todos && todos.map((todo) => (
          <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeSelect={handleSelect}
        >
          {renderTree(todo)}
        </TreeView>
        ))
      }
    </>
  );
}
