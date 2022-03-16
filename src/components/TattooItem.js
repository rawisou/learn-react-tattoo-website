import React from "react"

const TattooItem = (props) => {
    const { tattoo, onTattooClick } = props;

    return (
    <div className="tattoo-item">
        <div className="tattoo-item">
          <img src={tattoo.thumbnailUrl} alt="tattoo1" onClick={() => {onTattooClick(tattoo)}} />
          <h2> {tattoo.title} </h2>
        </div>
      </div>
    )
}

export default TattooItem