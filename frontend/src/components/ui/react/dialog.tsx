import cn from "@/utils/cn";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Button } from "./button";
import { XIcon } from "@/assets/icons/react/XIcon";

const dialog = ({
  isOpen,
  handleOpen,
  className,
  children,
}: {
  isOpen: boolean;
  handleOpen: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleOpen}
      transition
      className={cn(
        "bg-black-10 fixed inset-0 flex w-screen items-center justify-center p-4 transition-all duration-300 ease-out focus:outline-none data-[closed]:opacity-0",
      )}
    >
      <DialogPanel
        className={cn(
          "relative space-y-4 bg-white transition-all duration-300 ease-out md:p-12",
          className,
        )}
      >
        <Button
          onClick={handleOpen}
          id="close-dialog-button"
          title="close"
          className="bg-surface-30 text-grey-75 absolute top-4 right-4 rounded-full border border-green-50 p-2 hover:bg-red-200 hover:text-red-50"
        >
          <XIcon className="size-[1.5rem] stroke-3" onClick={handleOpen} />
        </Button>
        {children}
      </DialogPanel>
    </Dialog>
  );
};

export default dialog;
