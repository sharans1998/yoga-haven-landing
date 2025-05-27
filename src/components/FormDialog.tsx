import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NameEmailPhone from "@/components/NameEmailPhone";
import clsx from "clsx";

interface FormDialogProps {
  buttonText?: string;
  buttonVariant?: "default" | "secondary";
  title?: string;
  description?: string;
  submitText?: string;
  formId?: string;
  source?: string;
}

export function FormDialog({
  buttonText = "Register Now",
  buttonVariant = "default",
  title = "Register for the Workshop",
  description = "Fill in your details below and we'll get back to you shortly.",
  submitText = "Submit",
  formId = "",
  source = "/",
}: FormDialogProps) {
  const [modalFormState, setModalFormState] = React.useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant === "secondary" ? "outline" : "default"}
          className={clsx(
            buttonVariant === "secondary" &&
              "rounded-full border-yoga-deep-purple text-yoga-deep-purple hover:bg-yoga-deep-purple/5 hover:text-yoga-deep-purple font-medium px-6 py-6 text-base",
            buttonVariant === "default" &&
              "bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 text-white px-8 py-6 text-base rounded-full"
          )}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-yoga-lilac/95 backdrop-blur-md p-6 md:p-10">
        {modalFormState !== "success" && (
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-display font-medium text-yoga-charcoal leading-tight text-center">
              {title && title.split(" ").length > 1 ? (
                <>
                  {/* split the title such that only the last word gets the italics style. */}
                  {title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="italic text-yoga-deep-purple">
                    {title.split(" ").slice(-1)}
                  </span>
                </>
              ) : (
                title
              )}
            </DialogTitle>
            <DialogDescription className="text-yoga-charcoal/70 text-center">
              {description}
            </DialogDescription>
            {source}
          </DialogHeader>
        )}
        <NameEmailPhone
          submitText={submitText}
          formId={formId}
          source={source}
          nameFieldId="bWMU"
          emailFieldId="2mSw"
          phoneFieldId="p98H"
          sourceFieldId="xAK2"
          extraFieldId="jmyG"
          setModalFormState={setModalFormState}
        />
      </DialogContent>
    </Dialog>
  );
}
