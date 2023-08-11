import "./centeredMessage.css";

type CenteredMessageProps = {
  isError: boolean;
  text: string;
};

export function CenteredMessage({ isError, text }: CenteredMessageProps) {
  return (
    <p className="loading-error-text" style={{ color: isError ? "red" : "" }}>
      {text}
    </p>
  );
}
