import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={null}
          moreInfo={moreInfo}
        />
        <Skills />
        <Projects />
        <Publications />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
