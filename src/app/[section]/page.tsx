import { Input } from "@/components/ui/input";
import { emails } from "@/lib/emails";
import { Link } from "next-view-transitions";
import Image from "next/image";


export default function Section({
  params,
}: {
  params: { section: string; email: string };
}) {
  const section = params.section as keyof typeof emails;
  const emailList = emails[section];
  if (!emailList || emailList.length === 0) {
    return <div>No emails found for this section {section}</div>;
  }
  return (
    <>
      <div className=" bg-white border-r w-full">
        <div className="p-4 border-b">
          <Input type="text" placeholder="Search mail" className="w-full" />
        </div>
        <div className="overflow-auto h-[calc(100vh-60px)]">
          {emailList.map((email) => (
            <Link href={`/${section}/${email.id}`} key={email.id}>
              <div
                key={email.id}
                className={`grid grid-cols-[auto,1fr,auto] items-center p-4 hover:bg-gray-200 cursor-pointer border-b ${
                  params.email === String(email.id) ? "bg-gray-100" : ""
                }`}
              >
                <Image
                  src={email.avatar}
                  alt={`${email.name} avatar`}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{email.name}</h3>
                  <p className="text-sm text-gray-600">{email.subject}</p>
                </div>
                <span className="text-sm text-gray-500 w-20 text-right">
                  {email.time}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
