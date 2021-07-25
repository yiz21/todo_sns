import { useContext } from 'react'
import Layout from "../components/Layout";
import Home from "../components/Home";
import { Navigation } from '../data/navigation'

const IndexPage = () => {
  const nav = useContext(Navigation);
  return (
    <Layout title="todo sns">
      {nav.current == 0 && (<Home/>)}
      {/* {nav.current == 1 && (<Home/>)} */}
      {/* {nav.current == 2 && (<Home/>)} */}
    </Layout>
  );
};

export default IndexPage;