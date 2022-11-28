import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} REFERNICHIAA`;
  }, [title]);
};

export default useTitle;
