import SEO from "../components/SEO";
import Header from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Higor Menezes | Portfolio"
        description="Portfolio of Higor Menezes, a web developer"
      />
      <Header />
    </>
  );
}
