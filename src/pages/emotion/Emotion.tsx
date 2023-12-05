import React from 'react';
import ButtonCustom2 from '../../components/Button';
import styled from '@emotion/styled/macro';
import { theme as antdTheme } from 'antd';

const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
  & > h1 {
    color: red;
  }
`;

const Emotion = () => {
  const { useToken } = antdTheme;
  const { token: theme } = useToken();
  console.log(theme.screenXL);

  console.log(theme.colorBgContainer);
  return (
    <div>
      <ButtonCustom2>Submit</ButtonCustom2>
      <Parent>
        <Child>Green because I am inside a Parent</Child>
        <h1>abc</h1>
      </Parent>
      <Child>Red because I am not inside a Parent</Child>
    </div>
  );
};

export default Emotion;
