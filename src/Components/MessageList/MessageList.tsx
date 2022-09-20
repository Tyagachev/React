import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Messages } from 'src/types';

interface MessageListProps {
  messages: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <List>
      {messages.map((el, idx) => (
        <ListItem key={idx}>
          {el.author}: {el.text}
        </ListItem>
      ))}
    </List>
  );
};
