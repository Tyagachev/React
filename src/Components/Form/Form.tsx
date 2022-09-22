import React, { FC, useState } from 'react';
import MUIButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR } from '../../constans';
import { Message } from 'src/types';

interface FormProps {
  addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.user,
      text,
    });
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus={true}
          value={text}
          type="text"
          onChange={(event) => setText(event.target.value)}
        />
        <MUIButton
          style={{ padding: 15, marginLeft: 5 }}
          disabled={!text}
          variant="contained"
          type="submit"
        >
          Отправить
        </MUIButton>
      </form>
    </div>
  );
};