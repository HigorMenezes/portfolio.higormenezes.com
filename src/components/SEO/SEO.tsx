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
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="theme-color" content="#ffffff" />

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

      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />

      <link rel="shortcut icon" href="/favicon.ico" />

      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

SEO.defaultProps = {
  image: "/images/icon.png",
};

export default SEO;
