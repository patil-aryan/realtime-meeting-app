"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { FaDiscord, FaVideo, FaCalendarAlt, FaUsers, FaRecordVinyl, FaShare, FaLock } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
// import { TbBrandClerk } from "react-icons/tb";
import { IoShareSocial } from "react-icons/io5";
import LandingLayout from "./LandingLayout";

export default function HomePage() {
  const router = useRouter();

  return (
    <LandingLayout>
    <div className="bg-gradient-to-b from-[#4f43a1] to-[#1b263b] min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Easy Meets</h1>
        <p className="text-xl mb-8">
          Built with the latest Next.js and TypeScript, Easy Meets replicates Zoom, enabling secure video conferencing with advanced features.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push("/sign-in")}
          >
            Get Started
          </Button>
          {/* <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0d1b2a]"
            onClick={() => window.open("https://discord.gg/your-discord-link", "_blank")}
          >
            <FaDiscord className="mr-2" /> Join Discord
          </Button> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1b263b] border-none">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-[#1b263b]">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="flex justify-center gap-8 flex-wrap max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="p-4 bg-[#0d1b2a] rounded-full">
                {tech.icon}
              </div>
              <p className="text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Meetings?</h2>
        <p className="text-xl mb-8">
          Join Easy Meets today and experience seamless video conferencing.
        </p>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => router.push("/sign-in")}
        >
          Start Now
        </Button>
      </section>
    </div>
    </LandingLayout>
  );
}

// Features Data
const features = [
  {
    icon: <FaVideo className="text-white size-6" />,
    title: "New Meeting",
    description: "Quickly start a new meeting with camera and microphone settings.",
  },
  {
    icon: <FaCalendarAlt className="text-white size-6" />,
    title: "Schedule Meetings",
    description: "Schedule future meetings with ease and share links instantly.",
  },
  {
    icon: <FaUsers className="text-white size-6" />,
    title: "Meeting Controls",
    description: "Manage participants, screen sharing, and more with advanced controls.",
  },
  {
    icon: <FaRecordVinyl className="text-white size-6" />,
    title: "Record Meetings",
    description: "Record your meetings for future reference or review.",
  },
  {
    icon: <FaShare className="text-white size-6" />,
    title: "Personal Room",
    description: "Get a unique meeting link for instant meetings.",
  },
  {
    icon: <FaLock className="text-white size-6" />,
    title: "Secure & Real-time",
    description: "All interactions are secure and occur in real-time.",
  },
];

// Tech Stack Data
const techStack = [
  {
    icon: <SiNextdotjs className="text-white size-8" />,
    name: "Next.js",
  },
  {
    icon: <SiTypescript className="text-white size-8" />,
    name: "TypeScript",
  },
//   {
//     icon: <TbBrandClerk className="text-white size-8" />,
//     name: "Clerk",
//   },
  {
    icon: <SiTailwindcss className="text-white size-8" />,
    name: "Tailwind CSS",
  },
];