import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { FaqItem } from "../../interfaces/Interfaces";

function Accordion({ items }: { items: FaqItem[] }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //handle the click, and close the tab.

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  //render the tabs on the page.

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <button
          aria-expanded={isExpanded}
          className="accordion"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </button>
        {isExpanded && <div className="accordion-open">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t">{renderedItems}</div>;
}

export default Accordion;
