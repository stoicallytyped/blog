import React from "react";
export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      src="https://utteranc.es/client.js"
      repo="stoicallytyped/blog"
      issue-term="url"
      label="💬 comments"
      theme="preferred-color-scheme"
      crossorigin="anonymous"
      async
    />,
  ]);
}
