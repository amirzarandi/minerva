"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`))

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    });
  };


  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-light py-2">
        Welcome to <span className="text-2xl font-medium">{user?.username}&apos;s</span> Minerva
      </h1>
      <p className="text-lg font-extralight">
        To take notes with our <span className="text-lg font-normal">speech-to-text transcription</span> feature, consult the right panel.
      </p>
      <p className="text-lg font-extralight">
        Create a <span className="text-lg font-normal">new note</span> or folder in the main menu.
      </p>
      <Image
        src="/computer.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/computer-light.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />

      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default DocumentsPage;