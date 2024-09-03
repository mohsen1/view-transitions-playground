import { Button } from "@/components/ui/button";

import { Inbox, Send, File, Trash, Star, MoreVertical } from "lucide-react";
import { emails } from "../../lib/emails";

export default function SectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { section: keyof typeof emails };
}) {
  // get path params
  return (
    <div className="h-screen bg-gray-100 grid grid-cols-[15vw,20vw,1fr]">
      {/* Sidebar */}
      <div className=" bg-gray-800 text-white p-4 w-full">
        <h1 className="text-2xl font-bold mb-6">Mail</h1>
        <nav>
          <Button
            href="/inbox"
            variant={params.section === "inbox" ? "default" : "ghost"}
            className="transition_nav-button w-full justify-start mb-2 hover:text-black hover:bg-gray-300"
          >
            <Inbox className="mr-2 h-4 w-4" />
            Inbox 
          </Button>
          <Button
            variant={params.section === "sent" ? "default" : "ghost"}
            href="/sent"
            className="transition_nav-button w-full justify-start mb-2 hover:text-black hover:bg-gray-300"
          >
            <Send className="mr-2 h-4 w-4" />
            Sent
          </Button>
          <Button
            variant={params.section === "draft" ? "default" : "ghost"}
            href="/draft"
            className="transition_nav-button w-full justify-start mb-2 hover:text-black hover:bg-gray-300"
          >
            <File className="mr-2 h-4 w-4" />
            Drafts
          </Button>
          <Button
            variant={params.section === "trash" ? "default" : "ghost"}
            href="/trash"
            className="transition_nav-button w-full justify-start mb-2 hover:text-black hover:bg-gray-300"
          >
            <Trash className="mr-2 h-4 w-4" />
            Trash
          </Button>
        </nav>
      </div>
        {children}
    </div>
  );
}
