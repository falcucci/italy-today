import { Content } from "../content";

import { Container, Card, Row, Text } from "@nextui-org/react";

export const Layout = ({ children }) => (
  <Container fluid>
    {children}
    <Content />
  </Container>
);
