import { useEffect, useState } from "react";
import Axioss from 'axios';

export function useCheckFolder() {
  const [checked, setChecked] = useState({});
  useEffect(() => { }, []);

  return {checked};
}
