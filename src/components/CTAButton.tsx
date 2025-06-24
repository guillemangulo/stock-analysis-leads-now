import { Link } from 'react-router-dom';

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function CTAButton({ children, className = '', ...rest }: CTAButtonProps) {
  return (
    <Link
      to="/interest"
      className={`inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
