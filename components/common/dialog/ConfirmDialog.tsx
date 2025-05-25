"use client";

import { CancelButton } from "@/components/common/button/CancelButton";
import { SubmitButton } from "@/components/common/button/SubmitButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/common/ui/dialog";
import { useConfirmDialogStore } from "@/stores/ConfirmDialogStore";
import { DialogTitle } from "@radix-ui/react-dialog";

export const ConfirmDialog = () => {
  const isOpen = useConfirmDialogStore((state) => state.isOpen);
  const dialog = useConfirmDialogStore((state) => state.dialog);

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialog.title}</DialogTitle>
          <DialogDescription>{dialog.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex items-center justify-between gap-4">
            {dialog.cancel && (
              <CancelButton
                onClick={dialog.cancel.onClick || (() => {})}
              ></CancelButton>
            )}
            <SubmitButton
              label={dialog.submit.label}
              onClick={dialog.submit.onClick}
            ></SubmitButton>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
