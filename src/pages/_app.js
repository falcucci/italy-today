// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
});

function App({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;
