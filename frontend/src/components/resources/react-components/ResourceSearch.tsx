import Search from "@/components/shared/react-components/search";
import ResourceList from "@/components/resources/react-components/ResourceList";

const ResourceSearch = () => {
  return (
    <main className="absolute top-[calc(100vh-65rem)] w-screen space-y-20 lg:top-[calc(100vh-72rem)]">
      <div className="flex w-full items-center justify-center">
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
