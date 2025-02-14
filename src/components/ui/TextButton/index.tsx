type TextButtonProps = {
  text: string;
  className: string;
  onClick: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({
  className,
  text,
  onClick,
}) => {
  const classList = `notification-btn ${className}`;

  return (
    <button className={classList} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextButton;
