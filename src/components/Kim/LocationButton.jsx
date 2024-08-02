import { useState } from "react";
import "./LocationButton.css";
import "../common/PostBlock";
import PostBlock from "../common/PostBlock";

const LocationButton = ({ locations }) => {
  const [area, setArea] = useState("");

  const filteredMetropolitan = () => {
    return locations.filter((location) => location.region === "수도권");
  };

  const [newList, setNewList] = useState(filteredMetropolitan());

  const filteredLocations = () => {
    return locations.filter((location) => location.region === area);
  };

  return (
    <>
      <div className="LocationButton">
        <button
          onClick={() => {
            setNewList(filteredMetropolitan());
          }}
        >
          수도권
        </button>
        <button
          onClick={() => {
            setArea("강원권");
            setNewList(filteredLocations());
          }}
        >
          강원권
        </button>
        <button
          onClick={() => {
            setArea("충청권");
            setNewList(filteredLocations());
          }}
        >
          충청권
        </button>
        <button
          onClick={() => {
            setArea("영남권");
            setNewList(filteredLocations());
          }}
        >
          영남권
        </button>
        <button
          onClick={() => {
            setArea("호남권");
            setNewList(filteredLocations());
          }}
        >
          호남권
        </button>
      </div>
      <div className="postblock">
        {newList.map((item) => {
          return (
            <PostBlock
              img={item.image}
              textMain={item.name}
              textSub={item.address}
            />
          );
        })}
      </div>
    </>
  );
};

export default LocationButton;
