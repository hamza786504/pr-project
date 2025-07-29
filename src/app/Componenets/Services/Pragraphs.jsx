import React from 'react'

function Pragraphs({ paragraphs }) {

    return (
        <>
            {paragraphs.map((text, index) => (
                <p key={index} className="text-sm md:text-base">
                    {text}
                </p>
            ))}
        </>
    )
}

export default Pragraphs
