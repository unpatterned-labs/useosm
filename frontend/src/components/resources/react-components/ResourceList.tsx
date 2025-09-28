import React from "react";
import ResourceCard from "./ResourceCard";

const ResourceList = () => {
  return (
    <div className="mx-auto grid max-w-[1328px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
      <ResourceCard href="#" />
    </div>
  );
};

export default ResourceList;
