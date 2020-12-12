import SEO from "../components/SEO";
import Main from "../components/Main";
import Divider from "../components/Divider";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Higor Menezes | Portfolio"
        description="Portfolio of Higor Menezes, a web developer"
      />
      <Main>
        <Introduction />
        <Divider />
        <Skills />
        <Divider />
      </Main>
    </>
  );
}
