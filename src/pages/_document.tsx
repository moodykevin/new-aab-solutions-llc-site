import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="favicon-blue.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-white.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="All Access Building Solutions L.L.C. website"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
