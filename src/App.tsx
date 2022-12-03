import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import reactLogo from './assets/react.svg';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { Group, Button, Text } from '@mantine/core';
import { useCounter, useFullscreen } from '@mantine/hooks';
import { TextInput, Checkbox, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function App() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  const [value, setValue] = useState(null);
  const { toggle, fullscreen } = useFullscreen();

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'dark' }}
    >
      <div className="App">
        <Text>Calendar</Text>
        <Calendar value={value} onChange={setValue} />
        <Text>Count: {count}</Text>
        <Group position="center">
          <Button onClick={handlers.increment}>Increment</Button>
          <Button onClick={handlers.decrement}>Decrement</Button>
          <Button onClick={handlers.reset}>Reset</Button>
          <Button onClick={() => handlers.set(5)}>Set 5</Button>
        </Group>
        <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
          {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </Button>
      </div>
      <div>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />

            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </div>
    </MantineProvider>
  );
}

export default App;
