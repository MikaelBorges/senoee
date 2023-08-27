import "./button.css";

export function Button({ children, actionOnClick, classname }: any) {
  return (
    <button className={`button ${classname}`} onClick={actionOnClick}>
      {children}
    </button>
  );
}
