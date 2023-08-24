import React from "react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <div>
        <Card
          id={1}
          paragraph="Typescript"
          details="TS para frontend e backend"
        />
        <Card id={2} paragraph="HTML" details="HTML para frontend" />
        <Card id={3} paragraph="SQL" details="SQL para banco de dados" />
        <Card
          id={4}
          paragraph="Python"
          details="Python para analise de dados"
        />
      </div>
      <div>Footer</div>
    </Layout>
  );
}

export default App;
