import { useContext } from 'react'
import Layout from "../components/Layout";
import { Navigation } from '../data/navigation'
import Home from "../components/Home";
import Browse from "../components/Browse";
import User from "../components/User";

const IndexPage = () => {
  const nav = useContext(Navigation);
  return (
    <Layout title="todo sns">
      {nav.current == 0 && (<Home/>)}
      {nav.current == 1 && (<Browse/>)}
      {nav.current == 2 && (<User/>)}
    </Layout>
  );
};

export default IndexPage;