/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const header = css`
  font-size: 48px;
`;

export default function App(props) {
  return (
    <div css={header}>
      This is edwardbaeg.com
    </div>
  );
}
