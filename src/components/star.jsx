import { useReducer } from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false }) {
  const [checked, setChecked] = useReducer((checked) => !checked, selected);
  return (
    <FaStar
      color={checked ? "yellow" : "grey"}
      role="star"
      onClick={setChecked}
    />
  );
}
