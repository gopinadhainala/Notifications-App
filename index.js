const Notification = (props) => {
  //  Write your code here.
  const { imageUrl, cssPalatte, text } = props;
  const containerClassName = `notification-container ${cssPalatte}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={imageUrl} />
      <p className="paraText">{text}</p>
    </div>
  );
};

const element = (
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div className="paletteContainer">
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        cssPalatte="firstPalette"
        text="Information Message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        cssPalatte="secondPalette"
        text="Success Message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        cssPalatte="thirdPalette"
        text="Warning Message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        cssPalatte="fourthPalette"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
