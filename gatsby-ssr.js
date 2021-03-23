import React from "react";
export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      src="https://utteranc.es/client.js"
      repo="stoicallytyped/blog"
      issue-term="pathname"
      label="💬 comments"
      theme="preferred-color-scheme"
      crossOrigin="anonymous"
      async
    />,
  ]);
}
