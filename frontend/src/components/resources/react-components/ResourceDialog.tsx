import Dialog from "@/components/ui/react/dialog";
import type { ResourceItem } from "src/types/content";

const ResourceDialog = ({
  isOpen,
  handleOpen,
  resource = null,
}: {
  isOpen: boolean;
  handleOpen: () => void;
  resource: ResourceItem | null;
}) => {
  return (
    <Dialog
      isOpen={isOpen}
      handleOpen={handleOpen}
      className="w-screen bg-white md:h-[calc(100vh-20rem)] md:w-[calc(100vw-15rem)] md:rounded-4xl"
    >
      <div className="shadow-card mb-3 overflow-hidden rounded-3xl">
        <img
          src={resource?.image}
          alt={`thumbnail-${resource?.title}`}
          className="h-[25.44rem] w-full object-cover"
        />
      </div>
    </Dialog>
  );
};

export default ResourceDialog;
