//   return (
//     <div>
//       {
//         posts && 
//         posts.map((post) => (
//           <p key={post.id}>{post.name}</p>
//         ))
//       }
//     </div>
//   );
// };

// export default Index;


import React, { useEffect, useContext } from 'react';
import usePost from '../data/usePost'
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
  const { posts, error } = usePost();
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
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    )
  }

  return (
    <>
      { 
        posts &&
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeSelect={handleSelect}
        >
          {renderTree(posts[0])}
        </TreeView>
      }
    </>
  );
}
