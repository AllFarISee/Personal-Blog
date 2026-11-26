import { useMemo, useState } from "react";
import { stages, CODE } from "../models";

const STATUS_CLASS = {
  SELESAI: "text-ok",
  BERJALAN: "text-acc",
  RENCANA: "text-dim",
};

export default function useStageController() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(() => {
    const stage = stages[activeIndex];
    return {
      ...stage,
      code: CODE[stage.key],
      statusClass: STATUS_CLASS[stage.status],
    };
  }, [activeIndex]);

  return { stages, activeIndex, active, selectStage: setActiveIndex };
}
