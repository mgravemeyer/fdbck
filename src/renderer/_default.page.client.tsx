// /renderer/_default.page.client.jsx
// Environment: Browser

import ReactDOM from "react-dom";
import React from "react";

export { render };

async function render(pageContext) {
    const { Page, pageProps } = pageContext
    ReactDOM.hydrate(
        <Page {...pageProps} />,
        document.getElementById("page-view")
    );
}