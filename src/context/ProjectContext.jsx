import React, { useContext, useState, useEffect } from "react";
// import data from "../data/projectData.json";
import data from "../data/testData.json";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import Carousel from "../components/portfolio/carousel/Carousel";

const ProjectContext = React.createContext();

export function useProjects() {
  return useContext(ProjectContext);
}

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState();
  const [isLocked, toggle] = useBodyScrollLock();
  const [currentPage, setCurrentPage] = useState(1);




  // MODAL CONTROL USESTATE
  const [projectCategory, setProjectCategory] = useState("Graphic");
  const [active, setIsActive] = useState("1");

  const pageNumbers = [];



  // ABOUT MODAL CONTROLS
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const aboutClose = () => setAboutModalOpen(false);
  const aboutOpen = () => setAboutModalOpen(true);

  function openAboutModal(id) {
    const currentID = parseInt(id.currentTarget.id);
    setAboutModalOpen(true);
    toggle();

  }

  function closeAboutModal() {
    setAboutModalOpen(false);
    toggle();
  }



  // WORK MODAL CONTROLS

    // const workClose = () => setWorkModalOpen(false);
    // const workOpen = () => setWorkModalOpen(true);
    const [workModalOpen, setWorkModalOpen] = useState(false);
    const [workModalID, setWorkModalID] = useState();
    const [currentWork, setCurrentWork] = useState();
    const [currentSelectedWork, setCurrentSelectedWork] = useState([{}]);

    function addCurrentWork(work) {
      setCurrentWork(work);
      return [...work];
    }

    function openWorkModal(workID) {
      const currentID = parseInt(workID.currentTarget.id);

      // console.log(workID);
      
      setWorkModalID(currentID);

      const selectedWork = data.filter((work) => work.id === currentID);

      setCurrentSelectedWork(...selectedWork);

      addCurrentWork(selectedWork)

      setWorkModalOpen(true);
      
      toggle();

      console.log(workID);

      console.log(currentWork)

    // console.info("clicked " + [{ ...currentWork }]);


    }

    function closeWorkModal() {
      setWorkModalOpen(false);
      toggle();
    }



    // function openProjectInfoModal(projectID) {
    //   const currentProjectID = parseInt(projectID.currentTarget.id);
  
    //   setProjectInfoModalID(currentProjectID);
  
    //   const selectedProject = data.filter(
    //     (project) => project.id === currentProjectID
    //   );
  
    //   setCurrentSelectedProject(...selectedProject);
  
    //   addCurrentProject(selectedProject);
  
    //   setShowProjectInfoModal(true);
  
    //   toggle();
  
    //   // console.info("clicked " + [{ ...currentProject }]);
    // }





  // MODAL CONTROL FUNCTIONS
  const [showProjectInfoModal, setShowProjectInfoModal] = useState(false);
  const [projectInfoModalID, setProjectInfoModalID] = useState();
  const [currentSelectedProject, setCurrentSelectedProject] = useState([{}]);
  const [currentProject, setCurrentProject] = useState();

  function addCurrentProject(project) {
    setCurrentProject(project);
    return [...project];
  }

  function getProjects(id) {
    const currentProject = projects.filter((p) => p.id === id);
    console.log(currentProject);
  }

  function openProjectInfoModal(projectID) {
    const currentProjectID = parseInt(projectID.currentTarget.id);

    setProjectInfoModalID(currentProjectID);

    const selectedProject = data.filter(
      (project) => project.id === currentProjectID
    );

    setCurrentSelectedProject(...selectedProject);

    addCurrentProject(selectedProject);

    setShowProjectInfoModal(true);

    toggle();

    console.log(projectID);

    // console.info("clicked " + [{ ...currentProject }]);
  }

  function closeProjectInfoModal() {
    setShowProjectInfoModal(false);
    toggle();
  }

  //  CATEGORY SORT FUNCTIONS

  function sortCategoryUI(e) {
    const category = "UI";
    setProjectCategory(category);
    setIsActive(e.target.id)
    setCurrentPage(1);
  }

  function sortCategoryGraphic(e) {
    const category = "Graphic";
    setProjectCategory(category);
    setIsActive(e.target.id)
    setCurrentPage(1);
  }

  function sortCategoryDev(e) {
    const category = "Dev";
    setProjectCategory(category);
    setIsActive(e.target.id)
    setCurrentPage(1);

  }

  return (
    <ProjectContext.Provider
      value={{
        addCurrentProject,
        getProjects,
        openProjectInfoModal,
        closeProjectInfoModal,
        setShowProjectInfoModal,
        projectInfoModalID,
        currentSelectedProject,
        showProjectInfoModal,
        currentProject,
        sortCategoryUI,
        sortCategoryGraphic,
        sortCategoryDev,
        projectCategory,
        active,
        currentPage,
        setCurrentPage,
        aboutModalOpen,
        setAboutModalOpen,
        aboutOpen,
        aboutClose,
        workModalOpen,
        setWorkModalOpen,
        openWorkModal,
        closeWorkModal,
        currentWork,
        closeAboutModal,
        openAboutModal,
        currentSelectedWork,
        workModalID
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
