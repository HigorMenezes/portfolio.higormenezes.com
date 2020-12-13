import SEO from "../components/SEO";
import Main from "../components/Main";
import Divider from "../components/Divider";
import PageTitle from "../components/PageTitle";
import Skills from "../components/Skills";

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="Higor Menezes | Skills" description="Higor Menezes Skills" />
      <Main>
        <PageTitle>Skills</PageTitle>
        <Skills />
      </Main>
    </>
  );
}
