import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --border: 1px solid var(--bs-primary);
  --transition: all 0.3s linear;
  --nav-height: 55px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
}

/*
=============== 
Global Styles
===============
*/
html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

#root {
  overflow-x: hidden;
}

main {
  min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
}

section {
  margin: 1rem 0;
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

/* Mobile: reduce section min-height so content fits better on small screens */
@media screen and (max-width: 767px) {
  .section {
    min-height: auto;
    padding: var(--nav-height) 1rem;
  }
}

a:hover {
  cursor: pointer;
}

.title {
  font-family: "Permanent Marker";
}

/* Scale down titles on small screens to prevent overflow */
@media screen and (max-width: 575px) {
  .title {
    font-size: 1.5rem;
  }
  h1.title {
    font-size: 1.75rem;
  }
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  margin: 0 1rem;
  color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

  &:hover {
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)"};
  }
}

/* Tighter spacing for footer/social icons on small screens */
@media screen and (max-width: 575px) {
  .link-icons {
    font-size: 1.75rem;
    margin: 0 0.5rem;
  }
}

.page-item.active .page-link {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2.5rem;
  }
  .form-group {
      max-width: 750px;
    }
}

@media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--bs-primary);
  }
}

/* Skills section: smaller icons and labels on mobile */
@media screen and (max-width: 575px) {
  #skills .display-4 {
    font-size: 2rem;
  }
  #skills figcaption {
    font-size: 0.75rem;
  }
}

/* Publications: readable text and wrap long links on mobile */
@media screen and (max-width: 767px) {
  #publications ul {
    font-size: 0.9rem;
    padding-left: 0;
  }
  #publications a {
    word-break: break-word;
  }
}
`;

export default GlobalStyles;
