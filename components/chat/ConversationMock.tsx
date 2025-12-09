import Link from "next/link";

type ConversationMessage = {
  id: number;
  author: string;
  timestamp: string;
  text: string;
  avatarInitials: string;
  avatarColor: string;
  highlight?: string;
  reactions?: string[];
  attachment?: {
    link: string;
    title: string;
    description: string;
    badge?: string;
  };
};

const mockMessages: ConversationMessage[] = [
  {
    id: 1,
    author: "Pat Cummins",
    timestamp: "2:30 PM",
    text: "Hi John! I understand you're having trouble logging into the dashboard. Let me help you with that. Can you please tell me which browser you're using?",
    avatarInitials: "P",
    avatarColor: "#6366F1",
    reactions: ["1 ❌", "2 🆗", "3 ✅"],
  },
  {
    id: 2,
    author: "Riyad Ahsan",
    timestamp: "2:30 PM",
    highlight: "@PatCummins",
    text: "I'm using Chrome version 123.0.6312. The issue started after the maintenance window yesterday.",
    avatarInitials: "R",
    avatarColor: "#F97316",
  },
  {
    id: 3,
    author: "Pat Cummins",
    timestamp: "2:30 PM",
    text: "Thank you for the details. This seems to be related to a cache issue. Please try clearing your browser cache and cookies for our domain, then try logging in again.",
    avatarInitials: "P",
    avatarColor: "#6366F1",
  },
  {
    id: 4,
    author: "Pat Cummins",
    timestamp: "2:30 PM",
    text: "Thank you for the details. This seems to be related to a cache issue. Please try clearing your browser cache and cookies for our domain, then try logging in again.",
    avatarInitials: "P",
    avatarColor: "#6366F1",
  },
  {
    id: 5,
    author: "Riyad Ahsan",
    timestamp: "2:30 PM",
    highlight: "@Riyad Ahsan",
    text: "Hello, I'm experiencing login issues with the dashboard. Can you please help?",
    avatarInitials: "R",
    avatarColor: "#F97316",
  },
  {
    id: 6,
    author: "Pat Cummins",
    timestamp: "2:30 PM",
    text: "Here’s a Meet link so we can troubleshoot together.",
    attachment: {
      link: "https://meet.google.com/cnn-gwav-abj",
      title: "Meet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor nulla magna ut habitasse.",
      badge: "Dole",
    },
    avatarInitials: "P",
    avatarColor: "#6366F1",
  },
];

export default function ConversationMock() {
  return (
    <div className="space-y-5">
      {mockMessages.map((message) => (
        <MessageRow key={message.id} {...message} />
      ))}
    </div>
  );
}

function MessageRow(message: ConversationMessage) {
  return (
    <div className="flex  gap-2">
      <div className="flex-1">
        <div className="flex items-start gap-2 text-sm">
          <AvatarBubble
            initials={message.avatarInitials}
            color={message.avatarColor}
          />
          <div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-[#191F38]">
                {message.author}
              </span>
              <span className="text-xs text-[#94A3B8]">
                {message.timestamp}
              </span>
            </div>
            <span className="whitespace-pre-line">{message.text}</span>
          </div>
        </div>
        {/* <div className="mt-2 rounded-2xl bg-[#F6F8FF] px-4 py-3 text-sm text-[#0F172A]">
          {message.highlight && (
            <span className="font-semibold text-[#4157FE]">
              {message.highlight}{" "}
            </span>
          )}
          <span className="whitespace-pre-line">{message.text}</span>
        </div> */}

        {message.attachment && (
          <div className="mt-3 rounded-2xl border border-[#E4E7EC] bg-white px-4 py-3 text-sm text-[#475569]">
            <p className="text-xs uppercase tracking-wide text-[#94A3B8]">
              {message.attachment.title}
            </p>
            <Link
              href={message.attachment.link}
              target="_blank"
              className="text-sm font-semibold text-[#4157FE]"
            >
              {message.attachment.link}
            </Link>
            <p className="mt-2">{message.attachment.description}</p>
            {/* {message.attachment.badge && (
              <span className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[#E4E7EC] px-3 py-2 text-xs font-semibold text-[#0F172A]">
                {message.attachment.badge}
              </span>
            )} */}
          </div>
        )}

        {message.reactions && message.reactions.length > 0 && (
          <div className="mt-3 ml-10 flex items-center gap-2 text-xs">
            {message.reactions.map((reaction) => (
              <span
                key={reaction}
                className="rounded-full bg-white px-2 py-0.5 text-[#475569] shadow-sm"
              >
                {reaction}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AvatarBubble({
  initials,
  color,
}: {
  initials: string;
  color: string;
}) {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
