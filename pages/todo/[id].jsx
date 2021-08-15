import React, { useState, useEffect, useContext } from 'react';
import {useTodo} from '../../data/useTodo'
import { Navigation } from '../../data/navigation';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function TodoShow() {
  const router = useRouter();
  const { id } = router.query
  const { todo, error } = useTodo(id);
  const nav = useContext(Navigation);
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const classes = useStyles();

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  useEffect(() => {
    nav.changeNav(0);
  }, []);

  const renderTree = (nodes) => {
    return (
      <TreeItem key={`${nodes.id}`} nodeId={`${nodes.id}`} label={nodes.name}>
        {Array.isArray(nodes.todos) ? nodes.todos.map((node) => renderTree(node)) : null}
      </TreeItem>
    )
  }
  console.log(todo)
  return (
    <>
      { 
        todo &&
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          selected={selected}
          expanded={expanded}
          onNodeSelect={handleSelect}
          onNodeToggle={handleToggle}
        >
          {renderTree(todo)}
        </TreeView>
      }
    </>
  );
}
