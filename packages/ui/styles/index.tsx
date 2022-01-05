import { Global, css } from "@emotion/react";

export function GlobalStyles() {
    return (
        <Global styles={css`
        * {
    box-sizing: border-box;
    transition: 0.5s all;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    font-family: "Red Hat Display", sans-serif;
}

html,
body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

html,
body,
#__next,
.full {
    max-width: 100vw;
}

a {
    color: inherit;
    text-decoration: none;
}
        `} />
    )
}