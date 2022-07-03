import React from "react";
import ButtonRow from "./ButtonRow";

const BottomSection = () => {
  return (
    <div className="bottom-section">
      <h1 className="p-1">Clipboard for iOS and Mac OS</h1>
      <p className="p-1">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <ButtonRow />
    </div>
  );
};

export default BottomSection;
