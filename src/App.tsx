import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import { useState } from "react";
import Header from "./components/FixedHeader";
import Like from "./components/Like";
import MyCard from "./components/MyCard";
import image from "./card.jpg";
import imageBrown from "./br.jpeg";

function App() {
  const handleItemClick = (item: String) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibililty] = useState(false);
  const [drink, setPrice] = useState({ title: "Tea", price: 5 });

  function handleClick() {
    setPrice({
      ...drink, // Contains the atributes(properties) of the dring object.
      price: 6,
    });
  }

  return (
    <div
      style={{
        paddingTop: "70px",
      }}
    >
      <Header></Header>

      {/* <ListGroup
        items={["A", "B", "C", "D", "E", "F"]}
        heading={"Letters"}
        onSelectItem={handleItemClick}
      /> */}

      {/* Some code was removed from here an saved as react_test_code.txt at the react course folder */}

      {/* The Green Section .............................. */}

      <div id="green_section" className="container">
        <h2>The Green Section</h2>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
        <div className="separator"></div>
        {/* New row */}
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={image}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="separator"></div>
      {/* The Brown Section ............................. */}
      <div id="brown_section" className="container">
        <h2>The Brown Section</h2>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
        <div className="separator"></div>
        {/* New row */}
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-6 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
          <div className="col-sm-12 col-md-3">
            <MyCard
              image={imageBrown}
              title={"The Title"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            >
              <Like onClickHandler={() => console.log("Clicked")} />
            </MyCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
