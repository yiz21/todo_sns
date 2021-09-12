import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Mode } from '../data/mode';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  modeLabel: {
    right: 0,
    top: 0,
    position: 'fixed',
    zIndex: 2000,
    backgroundColor: 'gray'
  },
}));

export default function ModeLabel() {
  const classes = useStyles();
  const mode = useContext(Mode);

  return (
    <div className={classes.modeLabel}>
      <Typography variant="h10">
        {mode.current == 'normal' && '閲覧モード'}
        {mode.current == 'create' && '作成モード'}
        {mode.current == 'edit' && '編集モード'}
        {mode.current == 'delete' && '削除モード'}
      </Typography>
    </div>
  );
}