import { useState } from 'react'
import { Calendar } from '@mantine/dates';
import reactLogo from './assets/react.svg'
import './App.css'
import { MantineProvider } from '@mantine/core';
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function App() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  const [value, setValue] = useState(null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme ={{ colorScheme: 'dark'}}>
      <div className="App">
        <Calendar value={value} onChange={setValue} />
        <Text>Count: {count}</Text>
        <Group position="center">
          <Button onClick={handlers.increment}>Increment</Button>
          <Button onClick={handlers.decrement}>Decrement</Button>
          <Button onClick={handlers.reset}>Reset</Button>
          <Button onClick={() => handlers.set(5)}>Set 5</Button>
        </Group>
      </div>
    </MantineProvider>
  )
}

export default App
