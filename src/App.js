import React from 'react'
import { Button, Segment, Icon, Grid, Menu } from 'semantic-ui-react'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Grid textAlign='center'>
        <Segment raised compact style={{ marginTop: "100px", width: "350px" }}>
          <Grid centered>
            <Grid.Row centered>
              <Grid.Column textAlign='center'><h1>Count</h1></Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid centered>
            <Grid.Row centered>
              <Grid.Column textAlign='center'><h2>{count}</h2></Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid centered>
            <Grid.Row centered>
              <Grid.Column floated='left' width={6}>
                <Button color='green' animated onClick={() => setCount(count + 1)}>
                  <Button.Content visible >Increase</Button.Content>
                  <Button.Content hidden>
                    <Icon name='add' />
                  </Button.Content>
                </Button>
              </Grid.Column>

              <Grid.Column floated='right' width={6}>
                <Button color='red' animated onClick={() => { if (count > 0) setCount(count - 1) }}>
                  <Button.Content visible >Decrease</Button.Content>
                  <Button.Content hidden>
                    <Icon name='minus' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
      </Grid>

      <Grid textAlign='center' style={{ marginTop: "100px"}}><h3>Done by: &lt;Kaushik Karmakar&gt; &nbsp;&nbsp;&nbsp; &lt;12002962&gt;</h3></Grid>
    </div>
  )
}
export default App;