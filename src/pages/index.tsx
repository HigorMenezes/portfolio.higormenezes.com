import SEO from "../components/SEO";
import Main from "../components/Main";

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Higor Menezes | Portfolio"
        description="Portfolio of Higor Menezes, a web developer"
      />
      <Main>
        <p>Hi,</p>
        <p>I&rsquo;m Higor</p>
        <p>a WEB developer</p>
      </Main>
    </>
  );
}
