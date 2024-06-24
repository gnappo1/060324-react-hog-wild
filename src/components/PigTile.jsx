import {useState} from "react"

const PigTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        //! toggle the boolean value inside the state variable
        setShowDetails((currentValue) => !currentValue);
    };

    return (
      <div className="pigTile" onClick={handleClick}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} />
        {showDetails ? (
          <div className="pigTileDetails">
            <p>Specialty: {hog.specialty}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Weight: {hog.weight}</p>
            <p>Highest Medal: {hog["highest medal achieved"]}</p>
          </div>
        ) : null}
      </div>
    );
};

export default PigTile;
