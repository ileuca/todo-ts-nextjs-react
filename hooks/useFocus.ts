import { createRef } from "react";

const useFocus = () => {
  const ref: any = createRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { setFocus, ref };
};

export default useFocus;
