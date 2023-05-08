import Accordion from "./Accordion";

function FaqText() {
  const items = [
    {
      id: "1",
      label: "Kostar fotograferingen och får jag bilderna?",
      content:
        "Fotograferingen är kostnadsfri och du får spara ner och använda bilderna från hemsidan med logga på.",
    },
    {
      id: "2",
      label: "Kan jag köpa bilderna högupplösta?",
      content:
        "Absolut! Pengarna går till att driva galleriet vidare. En bild kostar 250kr och tre bilder kostar 500kr",
    },
    {
      id: "3",
      label: "Hur får jag information om när ni ska fotografera?",
      content:
        "Det bästa är att följa aussiegalleriet på Instagram och Facebook. Framförallt sker informationen om fototräffar på Instagram.",
    },
    {
      id: "4",
      label: "Vad ska jag tänka på inför fotograferingen?",
      content:
        "Ta med gott godis och eventuellt en leksak. Kan din hund inte vara lös kan ni ta med ett utställningskoppel, det kommer att redigeras bort om möjligt. Det är alltid bra att träna lite på att hunden ska kunna stå och sitta stilla innan fotograferingen.",
    },
    {
      id: "5",
      label: "Kan jag skicka in egna bilder?",
      content:
        "På grund av Copywrightskäl kan du inte skicka in dina egna bilder.",
    },
  ];

  return (
    <div>
      <div>
        <Accordion items={items} />
      </div>
    </div>
  );
}

export default FaqText;
