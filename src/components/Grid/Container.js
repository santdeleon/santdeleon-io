import styled from 'styled-components';

const Container = styled.div`
  padding: var(--spacer-size-0-rem) var(--spacer-size-400-rem);
  margin: var(--spacer-size-0-rem) auto;
  ${({ theme, fluid }) => theme.media.greaterThan('xxxs')`
    max-width: ${() => !fluid && '320px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('xxs')`
    max-width: ${() => !fluid && '375px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('xs')`
    max-width: ${() => !fluid && '425px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('sm')`
    max-width: ${() => !fluid && '576px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('md')`
    max-width: ${() => !fluid && '768px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('lg')`
    max-width: ${() => !fluid && '992px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('xl')`
    max-width: ${() => !fluid && '1024px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('xxl')`
    max-width: ${() => !fluid && '1440px'}
  `}
  ${({ theme, fluid }) => theme.media.greaterThan('xxxl')`
    max-width: ${() => !fluid && '2560px'}
  `}
`;

export default Container;
