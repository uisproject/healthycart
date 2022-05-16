import { useState } from "react";

const useTab = (categoryName) => {
  const [category, setCategory] = useState(categoryName);

  return { category, setCategory };
};

export default useTab;
