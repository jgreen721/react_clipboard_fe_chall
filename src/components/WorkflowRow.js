import React from "react";

var items = [
  {
    id: 1,
    icon: "./images/icon-blacklist.svg",
    title: "Create blacklists",
    caption: `Ensure sensitive information never makes its way to your clipboard
    by excluding certain sources.`,
  },

  {
    id: 2,
    icon: "./images/icon-text.svg",
    title: "Plain text snippet",
    caption: `Remove unwanted formatting from copied text for a consistent look.`,
  },
  {
    id: 3,
    icon: "./images/icon-preview.svg",
    title: "Sneak Preview",
    caption: `Quick preview of all snippets on your Clipboard for easy access.`,
  },
];

const WorkflowRow = () => {
  return (
    <div className="workflow-container">
      <div className="workflow-header">
        <h1>Supercharge your workflow</h1>
        <p className="workflow-header-p">
          We’ve got the tools to boost your productivity.
        </p>
      </div>
      <div className="workflow-row">
        {items.map((i) => (
          <div className="work-item" key={i.id}>
            <img src={i.icon} alt="icon" />
            <h3>{i.title}</h3>
            <p>{i.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowRow;
