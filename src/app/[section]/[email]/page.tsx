import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emails } from "@/lib/emails";
import { Inbox, Send, File, Trash, Star, MoreVertical } from "lucide-react";
import Image from "next/image";

type EmailSection = keyof typeof emails;

export default function Email({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { section: EmailSection; email: string };
}) {
  const email = emails[params.section]?.[parseInt(params.email) - 1];

  if (!email) {
    return <div>Email not found</div>;
  }

  return (
    <div className="flex-grow bg-white p-6 transition_email-body">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{email.subject}</h2>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src={email.avatar}
          alt={email.name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{email.name}</h3>
          <p className="text-sm text-gray-600">
            {email.name.toLowerCase().replace(" ", ".")}@example.com
          </p>
        </div>
      </div>
      <div className="prose max-w-none">
        <p>{email.content}</p>
        <p>
          Please review the attached documents and let me know if you have any
          questions or concerns. We&apos;ll discuss these points in more detail
          during our next meeting.
        </p>
        <p>
          Best regards,
          <br />
          {email.name}
        </p>
      </div>
    </div>
  );
}
