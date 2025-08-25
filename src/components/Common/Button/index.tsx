import { LinkTo } from './styles';

interface ButtonProps {
  text: string;
  link: string;
  padding: string;
  openInNewTab?: boolean;
}

const Button = ({ padding, text, link, openInNewTab}: ButtonProps) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={link}
      target={openInNewTab ? '_blank' : '_self'}
      rel={openInNewTab ? 'noopener noreferrer' : ''}
    >
      {text}
    </LinkTo>
  );
};

export default Button;
