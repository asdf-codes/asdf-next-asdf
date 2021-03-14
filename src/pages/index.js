import Layout from '../components/Layout';
import Section_0 from '../components/Section_0';
import Section_1 from '../components/Section_1';
import Section from '../components/Section';
import Clients from '../components/Clients';
import Intro from '../components/Intro';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Layout>
        <Intro />
        <Clients />
        {/* <Section_0/>
        <Section/>
        <Section_1 /> */}
      </Layout>
      <Button />
    </>
  );
}
