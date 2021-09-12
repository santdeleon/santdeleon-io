import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '.';

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<Props>`
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'SF Pro Display', Helvetica, sans-serif, system;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#000000')};
    background: ${({ theme }) =>
      theme.mode === 'dark' ? '#222222' : '#FFFFFF'};
    border-width: 6px 0 0 0;
    border-style: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right,
      #f76f6f,
      #fcca67,
      #fcfc83,
      #84ffaf,
      #83e0f7,
      #ca67e5,
      #ff87e1
    );
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#f4f2f2' : '#302f2f')}
  }

  p, small, li {
    margin: 0;
    color: gray;
  }

  li {
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar {
    background-color: #ff87e1;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    height: 10px;
    background: linear-gradient(
      to bottom,
      #ff87e1,
      #ca67e5,
      #83e0f7,
      #84ffaf,
      #fcfc83,
      #fcca67,
      #f76f6f
    );
  }

  ::selection {
    background: #84fbb8;
  }

  /**
 * SF Pro
 */
@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Thin.eot');
  src: local('SF Pro Display Thin'), local('SFProDisplay-Thin'),
    url('./SFProDisplay/SFProDisplay-Thin.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Thin.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Thin.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-ThinItalic.eot');
  src: local('SF Pro Display ThinItalic'), local('SFProDisplay-ThinItalic'),
    url('./SFProDisplay/SFProDisplay-ThinItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-ThinItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-ThinItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Ultralight.eot');
  src: local('SF Pro Display Ultralight'), local('SFProDisplay-Ultralight'),
    url('./SFProDisplay/SFProDisplay-Ultralight.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Ultralight.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Ultralight.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Ultralight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-UltralightItalic.eot');
  src: local('SF Pro Display UltralightItalic'),
    local('SFProDisplay-UltralightItalic'),
    url('./SFProDisplay/SFProDisplay-UltralightItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-UltralightItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-UltralightItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-UltralightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Light.eot');
  src: local('SF Pro Display Light'), local('SFProDisplay-Light'),
    url('./SFProDisplay/SFProDisplay-Light.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Light.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Light.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-LightItalic.eot');
  src: local('SF Pro Display LightItalic'), local('SFProDisplay-LightItalic'),
    url('./SFProDisplay/SFProDisplay-LightItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-LightItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-LightItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Regular.eot');
  src: local('SF Pro Display Regular'), local('SFProDisplay-Regular'),
    url('./SFProDisplay/SFProDisplay-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Regular.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Regular.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-RegularItalic.eot');
  src: local('SF Pro Display Regular Italic'),
    local('SFProDisplay-RegularItalic'),
    url('./SFProDisplay/SFProDisplay-RegularItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-RegularItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-RegularItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-RegularItalic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Medium.eot');
  src: local('SF Pro Display Medium'), local('SFProDisplay-Medium'),
    url('./SFProDisplay/SFProDisplay-Medium.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Medium.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Medium.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-MediumItalic.eot');
  src: local('SF Pro Display MediumItalic'), local('SFProDisplay-MediumItalic'),
    url('./SFProDisplay/SFProDisplay-MediumItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-MediumItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-MediumItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Semibold.eot');
  src: local('SF Pro Display Semibold'), local('SFProDisplay-Semibold'),
    url('./SFProDisplay/SFProDisplay-Semibold.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Semibold.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Semibold.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Semibold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-SemiboldItalic.eot');
  src: local('SF Pro Display SemiboldItalic'),
    local('SFProDisplay-SemiboldItalic'),
    url('./SFProDisplay/SFProDisplay-SemiboldItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-SemiboldItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-SemiboldItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-SemiboldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Bold.eot');
  src: local('SF Pro Display Bold'), local('SFProDisplay-Bold'),
    url('./SFProDisplay/SFProDisplay-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Bold.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Bold.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-BoldItalic.eot');
  src: local('SF Pro Display BoldItalic'), local('SFProDisplay-BoldItalic'),
    url('./SFProDisplay/SFProDisplay-BoldItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-BoldItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-BoldItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Heavy.eot');
  src: local('SF Pro Display Heavy'), local('SFProDisplay-Heavy'),
    url('./SFProDisplay/SFProDisplay-Heavy.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Heavy.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Heavy.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Heavy.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-HeavyItalic.eot');
  src: local('SF Pro Display HeavyItalic'), local('SFProDisplay-HeavyItalic'),
    url('./SFProDisplay/SFProDisplay-HeavyItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-HeavyItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-HeavyItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-HeavyItalic.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-Black.eot');
  src: local('SF Pro Display Black'), local('SFProDisplay-Black'),
    url('./SFProDisplay/SFProDisplay-Black.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-Black.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-Black.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('./SFProDisplay/SFProDisplay-BlackItalic.eot');
  src: local('SF Pro Display Black Italic'), local('SFProDisplay-BlackItalic'),
    url('./SFProDisplay/SFProDisplay-BlackItalic.eot?#iefix')
      format('embedded-opentype'),
    url('./SFProDisplay/SFProDisplay-BlackItalic.woff2') format('woff2'),
    url('./SFProDisplay/SFProDisplay-BlackItalic.woff') format('woff'),
    url('./SFProDisplay/SFProDisplay-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}
`;
