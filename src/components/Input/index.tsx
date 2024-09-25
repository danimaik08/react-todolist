import { HTMLProps, forwardRef } from 'react';

import * as UI from './styles';

interface IProps extends HTMLProps<HTMLInputElement> {
  onEnter: () => void;
}

const Input = forwardRef((props: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { onEnter, ...htmlProps } = props;

  return (
    <UI.Wrapper>
      <UI.Input
        ref={ref}
        {...htmlProps}
        onKeyDown={(evt) => {
          if (htmlProps.onKeyDown) {
            htmlProps.onKeyDown(evt);
          }

          if (evt.key === 'Enter') {
            onEnter();
          }
        }}
      />
    </UI.Wrapper>
  );
});

export default Input;
