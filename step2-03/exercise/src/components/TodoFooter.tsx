import React from 'react';
import { Store } from '../store';
import { DefaultButton, Stack, Text, IButtonStyles, IButtonProps } from 'office-ui-fabric-react';

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  // TODO: play around with the DefaultButton component below with a "styles" prop
  // - try it with an object: styles={{ ... }}

  const defaultButtonStyles2 = {
    root: { backgroundColor: 'white' },
    rootHovered: { background: 'lightpurple' }
  };
  // - try it with a function: styles={props => ({ ... })}
  const defaultButtonStyles = (props): Partial<IButtonStyles> => ({
    root: { backgroundColor: 'white' },
    rootHovered: { background: 'lightpurple' }
  });

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()} styles={defaultButtonStyles2}>
        Clear Completed
      </DefaultButton>
    </Stack>
  );
};
