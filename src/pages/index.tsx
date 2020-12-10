import SEO from "../components/SEO";
import Main from "../components/Main";
import Introduction from "../components/Introduction";

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Higor Menezes | Portfolio"
        description="Portfolio of Higor Menezes, a web developer"
      />
      <Main>
        <Introduction />
      </Main>
    </>
  );
}
