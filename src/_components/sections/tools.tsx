import Image from "next/image";

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const tools: Tool[] = [
  {
    icon: <Image alt="figma" src={"/tools/figma.png"} width={64} height={64} />,
    title: "Figma",
    description: "UX/UI Design, Wireframing.",
  },
  {
    icon: (
      <Image alt="framer" src={"/tools/framer.png"} width={64} height={64} />
    ),
    title: "Framer",
    description: "Build Your Custom Website.",
  },
  {
    icon: (
      <Image alt="webflow" src={"/tools/webflow.png"} width={64} height={64} />
    ),
    title: "Webflow",
    description: "Visual Development Tool.",
  },
  {
    icon: (
      <Image alt="notion" src={"/tools/notion.png"} width={64} height={64} />
    ),
    title: "Notion",
    description: "Project Management.",
  },
  {
    icon: (
      <Image
        alt="adobe-photoshop"
        src={"/tools/photoshop.png"}
        width={64}
        height={64}
      />
    ),
    title: "Adobe Photoshop",
    description: "Design",
  },
  {
    icon: (
      <Image
        alt="adobe-illustrator"
        src={"/tools/ai.png"}
        width={64}
        height={64}
      />
    ),
    title: "Adobe illustrator",
    description: "Motion and Design",
  },
  {
    icon: <Image alt="php" src={"/tools/php.png"} width={64} height={64} />,
    title: "PHP",
    description: "Build Your Custom Site.",
  },
  {
    icon: (
      <Image alt="java-script" src={"/tools/js.png"} width={64} height={64} />
    ),
    title: "Java Script",
    description: "Build Your Custom Site.",
  },
];

function Tools() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 tracking-tight">TOOLS</h1>
          <p className="text-gray-400 text-lg">
            Creative solutions, seamless collaboration, and impactful results.
          </p>
        </div>

        <div className="bg-neutral-800/50 rounded-3xl p-12 backdrop-blur-sm border border-neutral-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 p-8 hover:bg-neutral-700/30 transition-all duration-300 group cursor-pointer
                  ${index % 2 === 0 ? "md:border-r border-neutral-700/50" : ""}
                  ${
                    index < tools.length - 2
                      ? "border-b border-neutral-700/50"
                      : ""
                  }
                `}
              >
                <figure>{tool.icon}</figure>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
