import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import Button from '@tds/core-button'
import Heading from '@tds/core-heading'
import FlexGrid from '@tds/core-flex-grid'
import Box from '@tds/core-box'

function App() {
  const counter =useSelector(state=>state.counter)
  const dispatch=useDispatch()
    return (
    <div>
      <div style={{textAlign:'center'}}>
        <Heading level='h2'>React Redux Hooks project using TDS components</Heading>
      </div>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col>
            <Box vertical={2}>
              <Button onClick={()=>dispatch({type:'DECREMENT'})}>-</Button>
            </Box>
          </FlexGrid.Col>
          <FlexGrid.Col>
            <Box vertical={2}>
              <Button onClick={()=>dispatch({type:'RESET'})}>RESET</Button>
              <div style={{textAlign:'center'}}>
              <Heading level='h2'>{counter}</Heading>
              </div>
            </Box>
          </FlexGrid.Col>
          <FlexGrid.Col>
            <Box vertical={2}>
              <Button onClick={()=>dispatch({type:'INCREMENT'})}>+</Button>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </div>
    );
  }

  export default App;