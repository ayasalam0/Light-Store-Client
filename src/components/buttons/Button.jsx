var classNames = require("classnames");

const Button = (props) => {
  return (
    <button
      className={
        props.className
          ? props.className
          : " bg-fontPrimary rounded-lg  h-20 w-96"
      }
      onClick={props.onClick}
    >
      <a
        href={props.href}
        className={
          props.ParagraphStyle
            ? props.ParagraphStyle
            : "  text-4xl   font-light text-white   "
        }
      >
        {props.title}
      </a>
    </button>
  );
};

export default Button;
