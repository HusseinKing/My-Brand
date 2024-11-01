import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/Image2.png";
import img3 from "../assets/images/Image3.png";
import img4 from "../assets/images/Image4.png";
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "SSEIN Spare Parts",
      description: "An advanced e-commerce platform specializing in automotive spare parts distribution. Features an intelligent parts finder and real-time inventory management system.",
      img: img1,
    },
    {
      id: 2,
      title: "SSEIN Santé",
      description: "A comprehensive healthcare management system connecting patients with healthcare providers. Includes appointment scheduling, medical records management, and telemedicine capabilities.",
      img: img2,
    },
    {
      id: 3,
      title: "SSEIN Delivery",
      description: "A smart delivery management solution offering real-time tracking, route optimization, and automated dispatch systems for efficient last-mile delivery operations.",
      img: img3,
    },
    {
      id: 4,
      title: "SSEIN Cargo Transport",
      description: "An integrated logistics platform for managing international cargo transportation. Features customs documentation automation, container tracking, and multi-modal transport coordination.",
      img: img4,
    },
  ];

  return (
    <>
      <div id="projects" className="projects bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Explore our innovative solutions designed to revolutionize various industries.
          From automotive parts distribution to healthcare management, our projects
          showcase our commitment to creating efficient, user-friendly digital solutions
          that address real-world challenges.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            Projects
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;