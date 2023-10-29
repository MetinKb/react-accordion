import { useState } from "react"
import data from "../data"
import AccordionItem from "./AccordionItem"

function Accordion() {
    const [curOpen, setCurOpen] = useState(null)

    return (
        <div className="accordion">
            {data.map((element, index) => (
                <AccordionItem
                    key={index}
                    num={++index}
                    title={element.title}
                    text={element.text}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                />
            ))}
        </div>
    )
}

export default Accordion