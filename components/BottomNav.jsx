import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Navigation } from '../data/navigation';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 1350
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const nav = useContext(Navigation);
  const router = useRouter();
  
  const navMap = ['/', '/Browse', '/User']
  return (
    <BottomNavigation
      className={classes.root}
      value={nav.current}
      onChange={(event, newValue) => {
        nav.changeNav(newValue);
        router.push(navMap[newValue])
      }}
      showLabels
    >
      <BottomNavigationAction label="マイリスト" icon={<DescriptionOutlinedIcon />} />
      <BottomNavigationAction label="リストを探す" icon={<FindInPageOutlinedIcon />} />
      <BottomNavigationAction label="ログイン" icon={<AccountCircleOutlinedIcon />} />
    </BottomNavigation>
  );
}