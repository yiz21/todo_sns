import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Navigation } from '../data/navigation'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const nav = useContext(Navigation);
  return (
    <BottomNavigation
      value={nav.current}
      onChange={(event, newValue) => {
        console.log(newValue);
        nav.changeNav(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="マイリスト" icon={<DescriptionOutlinedIcon />} />
      <BottomNavigationAction label="リストを探す" icon={<FindInPageOutlinedIcon />} />
      <BottomNavigationAction label="ログイン" icon={<AccountCircleOutlinedIcon />} />
    </BottomNavigation>
  );
}