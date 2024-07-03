import { React, useState, useEffect } from "react";
import GallaryItem from "./GallaryItem";
import Pagination from "../pagination/Pagination";
import "./gallary.css";
import { useProjects } from "../../context/ProjectContext";
// import data from "../../data/projectData.json";
import data from "../../data/testData.json"

const Gallary = () => {
  const {
    sortCategoryUI,
    sortCategoryGraphic,
    sortCategoryDev,
    active,
    projectCategory,
    openProjectInfoModal,
    currentPage,
    setCurrentPage,
  } = useProjects();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
    // console.log(currentPosts);
    // console.log(posts);
  }, [posts]);

  const categoryLength = data.filter((data) =>
    data.category.includes(projectCategory)
  ).length;

  // if (categoryLength > 6) {
  //   console.log("more then 6");
  // }

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    .filter((post) => post.category === projectCategory)
    .slice(indexOfFirstPost, indexOfLastPost);

  // Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <section className="gallary_container" id="gallary">


          <GallaryItem
            // posts={currentPosts}
            key={data.id}
            posts={posts}
            loading={loading}
            projectCategory={projectCategory}
            onClick={openProjectInfoModal}
          />

        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={categoryLength}
          currentPage= {currentPage}
          paginate={paginate}
        /> */}
      </section>
    </>
  );
};

export default Gallary;
