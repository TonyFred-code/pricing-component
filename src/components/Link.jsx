import { node, string } from "prop-types";

export default function Link({ children, className = "" }) {
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <a href="#" onClick={handleLinkClick} className={className}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: node.isRequired,
  className: string,
};
