import { useState } from "react";
interface Props {
  items: String[];
  heading: String; // In these two properties there is : to specify the type of the parameter and thatt is typescript
  onSelectItem: (item: String) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
  // Here we are seperating the props in to heading and items. Hence we can use them directly. Otherwise if we use some word there like props, we need to access them as props.items or props.heading.

  const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize useState as -1 and break it in to two fields

  //   useState (is a hook) is an array containing two things
  //     1. The variable that is needed to change according to a state.
  //     2. The function that changes that variable

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found</p>}

        {
          /* Inside a jsx code that is returning it only allows html components or athoer react components. Hence we have to use { } around it. */

          items.map((item, index) => (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
