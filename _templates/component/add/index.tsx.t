---
to: components/<%= name %>.tsx
unless_exists: true
---
import React from "react";

export type <%= name %>Props =  {
  children:React.ReactNode,
}

export const <%= name %> = ({ children }: <%= name %>Props):JSX.Element => {
  return (
    <div>
    {children}
    </div>
  );
};