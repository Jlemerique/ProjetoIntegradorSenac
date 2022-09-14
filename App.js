import * as React from 'react';
import { Card, Button,  Title, Paragraph } from 'react-native-paper';

const App = () => (
  <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>

    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

);

export default App;


