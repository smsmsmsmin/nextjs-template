import { useRouter } from 'next/router';
import { css } from '@emotion/core';

const ActiveLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const style = css`
    color: ${router.pathname === href ? '#f42f54' : '#333333'};
    font-weight: ${router.pathname === href ? 700 : 400};
  `;
  return (
    <a href={href} css={style} {...props}>
      {children}
    </a>
  );
};

export default ActiveLink;
