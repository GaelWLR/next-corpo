import PropTypes from 'prop-types';
import Link from 'next/link';

function HeaderNavLink({ className, href, title }) {
  if (href.includes('https://')) {
    return (
      <a href={href} target='_blank' className={`px-4 py-6 ${className}`}>
        {title}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={`px-4 py-6 ${className}`}>{title}</a>
      </Link>
    );
  }
}

HeaderNavLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default HeaderNavLink;
