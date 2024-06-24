import PigTile from "./PigTile";
import { v4 as uuidv4 } from "uuid";

const PigList = ({ hogs }) => {
    const mappedPigs = hogs.map((hogObj) => (
      <PigTile hog={hogObj} key={uuidv4().slice(0, 4)} />
    ));

    return <div className="pigList">{mappedPigs}</div>;
}

export default PigList;