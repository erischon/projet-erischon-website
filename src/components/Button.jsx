function Button({ children, link }) {
  return (
    <a href={link} className="btn">
      {children}
    </a>
  );
}

export default Button;
