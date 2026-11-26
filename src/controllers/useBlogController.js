import useScrollProgress from "./useScrollProgress.js";
import useStageController from "./useStageController.js";
import * as model from "../models";

export const NAV_LINKS = [
  { id: "awal", label: "Awal" },
  { id: "jalur", label: "Perjalanan" },
  { id: "titik", label: "Titik balik" },
  { id: "belajar", label: "Belajar" },
  { id: "rencana", label: "Rencana" },
];

const STATUS_CLASS = {
  SELESAI: "text-ok",
  BERJALAN: "text-acc",
  RENCANA: "text-dim",
};

export default function useBlogController() {
  const progress = useScrollProgress();
  const stage = useStageController();

  return {
    nav: { links: NAV_LINKS, progress },
    hero: model.hero,
    goalMap: model.goalMap,
    awal: model.awal,
    bidang: model.bidang,
    jalur: model.jalur,
    jalurNarasi: model.jalurNarasi,
    titikBalik: model.titikBalik,
    stage,
    pelajaran: model.pelajaran,
    rencana: model.rencana.map((r) => ({
      ...r,
      statusClass:
        STATUS_CLASS[r.status] === "text-dim" ? "text-dim" : "text-acc",
    })),
    penutup: model.penutup,
    penutupAkhir: model.penutupAkhir,
    footer: model.footer,
  };
}
