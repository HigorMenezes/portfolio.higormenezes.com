import Head from "next/head";

import environment from "../../configs/environment";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

function SEO({ title, description, image }: SEOProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${environment.siteUrl}${image}`} />
      <meta property="og:title" content={title} />

      <meta name="twitter:creator" content="@" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${environment.siteUrl}${image}`} />

      <link rel="apple-touch-icon" sizes="192x192" href="/images/icon.png" />
      <link rel="apple-touch-icon" sizes="256x256" href="/images/icon.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/images/icon.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/images/icon.png" />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}

SEO.defaultProps = {
  image: "/images/icon.png",
};

export default SEO;
