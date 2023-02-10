import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Input,
  Loading,
} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { GithubIcon } from "../components/navbar/github-icon";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./SearchIcon.js";
import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <Layout>
      <Navbar variant="floating">
        <Navbar.Brand css={{ mr: "$100" }}>
          <Image
            src="/italy.png"
            alt="me"
            width={60}
            height={60}
            css={{ mr: "$60" }}
          />
          <Text
            b
            color="inherit"
            css={{ padding: "1em" }}
            hideIn="xs">
            ITALY TODAY
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          hideIn="xs"
          variant="underline"
          enableCursorHighlight
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}>
          <Navbar.Link isActive activeColor="success" href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Suggest</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
          <Navbar.Link
            target={"_blank"}
            href="http://github.com/falcucci/italy-today">
            Github
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
