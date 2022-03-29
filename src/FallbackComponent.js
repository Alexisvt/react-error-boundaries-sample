export default function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      I catched an error
      <p>
        The error is: <pre>{error.messsage}</pre>{" "}
      </p>
    </div>
  );
}
