import Search from "../search";
import ResourceList from "./ResourceList";

const ResourceSearch = () => {
  return (
    <main className="w-screen lg:top-[calc(100vh-72rem)] top-[calc(100vh-65rem)] absolute space-y-20">
      <div className="flex items-center justify-center w-full">
        <Search
          placeholder="Search..."
          onChange={(value) => {
            console.log("Search value:", value);
          }}
        />
      </div>
      <section>
        <ResourceList />
      </section>
    </main>
  );
};

export default ResourceSearch;
