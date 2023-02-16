import Head from "next/head";

const SEO = ({ description, keywords, title }) => (
  <>
    <title>{title} | Italy news summarizer</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.join(", ")} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="@alexfalcucci" />
    <meta name="twitter:image" content="" />
    <meta property="og:image" content="" />
    <link rel="icon" type="image/png" href="/italy.png" />
    <link
      rel="apple-touch-icon"
      type="image/png"
      href="/italy.png"
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-171177495-4"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-171177495-4');
              `,
      }}
    />
  </>
);

SEO.defaultProps = {
  description:
    "Summarize the latest or specific news from Italy extracting the most important informations using AI and presenting them in a concise and easy-to-understand format.",
  keywords: [
    "react",
    "reactjs",
    "styled-components",
    "styledcomponents",
    "nextjs",
  ],
};

export default SEO;
