import React from "react";

import styles from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";

import {
  IctInventoryImages,
  BosscoImages,
  CibmImages,
  BloodDonationImages,
} from "../assets/images";

const ProjectList = () => {
  return (
    <div className={styles.projects}>
      <ProjectCard title="ICT Inventory System" images={IctInventoryImages} />
      <ProjectCard title="CIBM" images={CibmImages} />
      <ProjectCard title="1Bossco Queuing System" images={BosscoImages} />
      <ProjectCard title="Blood Donations" images={BloodDonationImages} />
    </div>
  );
};

export default ProjectList;
