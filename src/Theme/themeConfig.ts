import { theme as themeAntD, type ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
    screenXL: 1400
  },
  algorithm: themeAntD.darkAlgorithm,
  components: {
    Form: {
      colorError: 'red',
      fontSize: 12
    },
    Button: {}
  }
};

export default theme;
