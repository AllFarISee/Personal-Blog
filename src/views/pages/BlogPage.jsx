import useBlogController from "../../controllers/useBlogController.js";
import TopBar from "../components/TopBar.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import Paragraphs from "../components/Paragraphs.jsx";
import JourneyCards from "../components/JourneyCards.jsx";
import FieldGrid from "../components/FieldGrid.jsx";
import LearnTabs from "../components/LearnTabs.jsx";
import LessonGrid from "../components/LessonGrid.jsx";
import PlanGrid from "../components/PlanGrid.jsx";
import Footer from "../components/Footer.jsx";

export default function BlogPage() {
  const c = useBlogController();

  return (
    <div id="top">
      <TopBar links={c.nav.links} progress={c.nav.progress} />
      <Hero hero={c.hero} goalMap={c.goalMap} />

      <Section id="awal" no="01" title="Dari mana semuanya dimulai" split>
        <Paragraphs items={c.awal} />
      </Section>

      <Section id="jalur" no="02" title="Perjalanan kerja">
        <JourneyCards items={c.jalur} />
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 story">
            <Paragraphs items={c.jalurNarasi} />
          </div>
          <div className="lg:col-span-5">
            <FieldGrid items={c.bidang} />
          </div>
        </div>
      </Section>

      <Section id="titik" no="03" title="Titik baliknya" split>
        <Paragraphs items={c.titikBalik.paragraphs} />
        <div className="my-8 panel p-6 border-l-4 !border-l-accbg">
          <p className="hd text-3xl sm:text-4xl !leading-[1.05]">
            {c.titikBalik.quoteTop}
            <br />
            <span className="text-acc">{c.titikBalik.quoteAccent}</span>
          </p>
        </div>
      </Section>

      <Section
        id="belajar"
        no="04"
        title="Proses belajar: sensor sampai dashboard"
      >
        <p className="text-dim max-w-3xl mb-8 leading-relaxed">
          Saya membagi proses belajar menjadi empat tahap. Setiap tahap diberi
          status supaya jelas mana yang sudah dikerjakan dan mana yang masih
          rencana. Klik tahap untuk membaca ceritanya.
        </p>
        <LearnTabs
          stages={c.stage.stages}
          activeIndex={c.stage.activeIndex}
          active={c.stage.active}
          onSelect={c.stage.selectStage}
        />
      </Section>

      <Section id="pelajaran" no="05" title="Hal-hal yang saya pelajari">
        <LessonGrid items={c.pelajaran} />
      </Section>

      <Section id="rencana" no="06" title="Arah selanjutnya" split>
        <Paragraphs items={c.penutup} />
        <PlanGrid items={c.rencana} />
        <Paragraphs items={c.penutupAkhir} />
      </Section>

      <Footer left={c.footer.left} right={c.footer.right} />
    </div>
  );
}
