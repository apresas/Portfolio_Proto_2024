import React from "react";
import "./gallary.css";
import { SiGithub } from "react-icons/si";
import { MdOutlineSportsHockey } from "react-icons/md";
import { useProjects } from "../../context/ProjectContext";

const GallaryItem = ({ onClick, posts, loading, projectCategory }) => {
  const {
    workModalOpen,
    workClose,
    workOpen,
    openWorkModal,
    openProjectInfoModal,
  } = useProjects();

  let iconStatus = <SiGithub />;
  if (projectCategory.includes("Graphic") || projectCategory.includes("UI")) {
    iconStatus = "";
  }

  // console.log(currentSelectedWork)
  // onClick={() => (workModalOpen ? workClose() : workOpen())}

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((post) => (
        <div className="gi_container" key={post.id} id={post.id} onClick={openWorkModal}>
          <div className="container_overlay" key={post.id}>
            <h1 className="overlay_title">{post.title}</h1>
            <div className="overlay_subtitles">
              <h3>{post.category}</h3>
              <section className="tags_container">
                {post.tags.map((tag) => (
                  <small>{tag}</small>
                ))}
              </section>
              {/* <small>{post.subtitle}</small> */}
            </div>
          </div>
          <div className="item_content">
            <img className="item_image" src={post.tile_img} alt="" />
            <img className="item_image_alt" src={post.tile_alt_img} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default GallaryItem;
