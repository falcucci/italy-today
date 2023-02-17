import {
  Text,
  Input,
  Button,
  Loading,
  Spacer,
  Grid,
} from "@nextui-org/react";
import Typewriter from "typewriter-effect";
import { useState } from "react";

export const Content = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [curArticle, setCurArticle] = useState(
    "https://www.milanotoday.it/dossier/potere/ruby-ter-storia-processo.html"
  );

  const generateSummary = async () => {
    setLoading(true);
    setSummary("");
    const url = `api/extract?url=${curArticle}`;
    console.log('url: ', url);
    const response = await fetch(url);
    const data = await response.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
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
          title="Article"
          size="xl"
          bordered
          labelLeft="https://"
          labelRight=".it"
          placeholder="milano"
          initialValue={curArticle}
          onChange={e => setCurArticle(e.target.value)}
          css={{
            width: "100%",
          }}
        />
        <Spacer y={1} />
        <Button
          title="Summarize"
          bordered
          color="white"
          size="xl"
          onClick={() => generateSummary()}
          css={{
            width: "100%",
          }}>
          {loading && (
            <Loading
              type="points-opacity"
              color="currentColor"
              size="xl"
            />
          )}
          {!loading && "SUMMARIZE"}
        </Button>
        {summary && (
          <Grid
            css={{
              textAlign: "left",
              mt: "$10",
            }}>
            <Text h1 css={{ textAlign: "center" }}>
              Summary
            </Text>
            <Typewriter
              onInit={typewriter => {
                summary.split(". ").map(e => {
                  typewriter.typeString(`<li>${e}</li>`).start();
                });
              }}
              options={{
                cursor: "",
                autoStart: true,
                loop: false,
                delay: 0,
              }}
            />
          </Grid>
        )}
      </Grid>
    </Grid.Container>
  );
};
