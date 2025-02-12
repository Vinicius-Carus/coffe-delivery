import { useFormContext } from "react-hook-form";
import { ErrorFieldStyle } from "./style";

export default function ErrorField({ name }: { name: string }) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    errors[name] &&
    errors[name].message && (
      <ErrorFieldStyle>
        <p> {String(errors[name].message)}</p>
      </ErrorFieldStyle>
    )
  );
}
//
