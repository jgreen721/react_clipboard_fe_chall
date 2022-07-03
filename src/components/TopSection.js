import React from "react";
import { motion } from "framer-motion";

const TopSection = () => {
  return (
    <div className="top-section-parent">
      <motion.div
        initial={{ translateY: "-200vh" }}
        animate={{
          translateY: "0vw",
          transition: { duration: 1, ease: "easeIn" },
        }}
        className="top-section"
      >
        <div className="top-section-top-row">
          <h1>Keep track of your snippets</h1>
          <p>
            {" "}
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices. Download for
            iOS Download for Mac Keep track of your snippets Clipboard instantly
            stores any item you copy in the cloud, meaning you can access your
            snippets immediately on all your devices. Our Mac and iOS apps will
            help you organize everything.
          </p>
        </div>
        <div className="top-section-bottom-row">
          <div className="top-section-bottom-col">
            <img
              className="computer-img"
              src="/images/image-computer.png"
              alt="computer-img"
            />
          </div>
          <div className="top-section-bottom-col">
            {/* <div class="bottom-col bottom-info"> */}
            <div className="bottom-col-content">
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="bottom-col-content">
              <h3>ICloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div className="bottom-col-content">
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default TopSection;
