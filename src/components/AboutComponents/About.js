import React from "react";
const About = (props) => {
  return (
    <div className="about-content">
      <h4 className="title">About me</h4>
      <p className="description">
        {" "}
        As a data engineer I extract data from Open Source APIs; Rest APIs and
        Apache Nifi. I process large datasets with agile software; Mapreduce,
        Apache Kafka through stream and batch processing framework. Load it to
        SQL DB Warehouse for data analytics team to pick up with analytics.
      </p>
      <h4 className="title">Passion</h4>
      <p className="description">
        Solving Financial Audit data queries using data engineering tools.
      </p>
      <h4 className="title">Mantra</h4>
      <p className="description">
        Do thorough ETL and pass it to Data Analytics team.
      </p>
    </div>
  );
};

export default About;
