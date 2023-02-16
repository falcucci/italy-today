import { Analytics } from "@vercel/analytics/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
});

function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
      <Analytics />
    </>
  );
}

export default App;
