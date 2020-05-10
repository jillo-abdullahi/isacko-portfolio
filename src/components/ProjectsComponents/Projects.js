import React from "react";
import ProcessBox from "./ProcessBox";

const processes = {
  "1": {
    title: "Connect Phase 1",
    tools: [],
    content: ["APIs", "Data Flow Frameworks"],
  },
  "2": {
    title: "External Database",
    tools: ["SQL DBs"],
    content: ["Enterprise", "Data Warehouse"],
  },
  "3": {
    title: "Buffer Phase",
    tools: ["Kafka", "Apache", "Redis", "Pub-Sub"],
    content: ["Cache", "Message Queries"],
  },
  "4": {
    title: "Processing Framework",
    tools: ["Mapreduce", "Spark", "SQL Database Warehouse"],
    content: ["Stream", "Batch"],
  },
  "5": {
    title: "Store Phase",
    tools: [],
    content: [
      "SQL Database Warehouse",
      "Visualization",
      "Web-UIs",
      "BI Tools",
      "Mobile Apps",
    ],
  },
};

const Projects = () => {
  return (
    <div className="container projects-content">
      <div className="processes-section">
        <div className="section-title">
          <h4>Data Engineer Blueprint</h4>
        </div>
        <div className="processes-content">
          <div className="row processes-row">
            {Object.keys(processes).map((process) => {
              return (
                <ProcessBox
                  {...processes[process]}
                  key={process}
                  process={process}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
