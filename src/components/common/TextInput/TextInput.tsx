import { FC } from 'react';

import * as S from './TextInput.styled';

interface TextInputProps {
  onChange?: (value: string) => void;
  active: boolean;
  value?: string | number | readonly string[];
  disabled?: boolean;
}

const TextInput: FC<TextInputProps> = ({ value, onChange, active, disabled }) => {
  return (
    <S.Container>
      <S.Input
        value={value}
        placeholder="Send message"
        onChange={(e) => onChange(e.target.value)}
        $active={active}
        disabled={disabled}
      />
    </S.Container>
  );
};

export default TextInput;
