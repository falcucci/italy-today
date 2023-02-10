import {
  Text,
  Input,
  Button,
  Loading,
  Spacer,
  Grid,
} from "@nextui-org/react";
import { Box } from "./Box.js";
import Typewriter from "typewriter-effect";

const summary = `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

`;

export const Content = () => (
  <Grid.Container
    justify="center"
    css={{ alignContent: "center", alignItems: "center" }}>
    <Grid css={{ width: "60%" }}>
      <Text
        h1
        weight="bold"
        size={60}
        css={{
          mt: "$60",
          textAlign: "center",
        }}>
        Summarize any Italy news
      </Text>
      <Text
        h4
        weight="bold"
        color="grey"
        css={{
          mt: "-$9",
          textAlign: "center",
        }}>
        Copy and paste a link which you would like to summarize.
      </Text>
      <Input
        size="xl"
        bordered
        labelLeft="https://"
        labelRight=".it"
        placeholder="milano"
        initialValue="https://www.milanotoday.it/"
        css={{
          width: "100%",
        }}
      />
      <Spacer y={1} />
      <Button
        bordered
        color="white"
        size="xl"
        css={{
          width: "100%",
        }}>
        SUMMARIZE
      </Button>
      <Grid
        css={{
          textAlign: "left",
          mt: "$10",
        }}>
        <Text h1 css={{ textAlign: "center"}}>Summary</Text>
        <Typewriter
          onInit={typewriter => {
            summary && summary.split(". ").map(e => {
              typewriter.typeString(`<li>${e}</li>`).start();
            })
          }}
          options={{
            cursor: "",
            autoStart: true,
            loop: false,
            delay: 0,
          }}
        />
      </Grid>
    </Grid>
  </Grid.Container>
);
