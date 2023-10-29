import React, { useRef, useEffect, useState } from 'react'

function AccordionItem({ num, title, text, curOpen, onOpen }) {
    const isOpen = num === curOpen  // To open only one div at a time
    const contentBoxRef = useRef(null)
    const [contentHeight, setContentHeight] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // To instantly adjust the length of the container div according to the screen size
    useEffect(() => {
        if (contentBoxRef.current) {
            const height = contentBoxRef.current.clientHeight
            setContentHeight(height)
        }

        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

    }, [isOpen, windowWidth])

    return (
        <div
            className={`item ${isOpen ? "open" : null}`}
            onClick={() => onOpen(isOpen ? null : num)}
            // Increasing container div height value according to content length
            style={{ height: isOpen ? `${70 + contentHeight}px` : "auto" }}
        >
            <div className="p-container">
                <p className="number">
                    {num > 9 ? num : `0${num}`}
                </p>
                <p className="title">
                    {title}
                </p>
                <p className="icon">-</p>
            </div>
            {isOpen && <div className="content-box" ref={contentBoxRef}>
                <p>{text}</p>
            </div>}
        </div>
    )
}

export default AccordionItem
