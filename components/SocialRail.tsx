import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

export const socials = [
  {
    name: "GitHub",
    handle: "@RyZeDZ",
    href: "https://github.com/RyZeDZ",
    Icon: SiGithub,
    tilt: "-7deg",
    nudge: "0",
  },
  {
    name: "LinkedIn",
    handle: "@elkamelbens",
    href: "https://linkedin.com/in/elkamelbens",
    Icon: LinkedInIcon,
    tilt: "5deg",
    nudge: "0.7rem",
  },
  {
    name: "Instagram",
    handle: "@kamel_bensmaine",
    href: "https://www.instagram.com/kamel_bensmaine/",
    Icon: SiInstagram,
    tilt: "-4deg",
    nudge: "0.15rem",
  },
  {
    name: "Email",
    handle: "bensmaine.kamel1@gmail.com",
    href: "mailto:bensmaine.kamel1@gmail.com",
    Icon: Mail,
    tilt: "8deg",
    nudge: "0.9rem",
  },
];

export default function SocialRail() {
  return (
    <ul className="absolute left-16 top-1/2 hidden -translate-y-1/2 flex-col gap-5 xl:flex">
      {socials.map(({ name, handle, href, Icon, tilt, nudge }) => (
        <li key={name} style={{ marginLeft: nudge }}>
          <a
            href={href}
            aria-label={name}
            style={{ rotate: tilt }}
            className="group flex h-11 w-max items-center rounded-lg border border-line bg-panel text-body transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <span className="flex size-11 shrink-0 items-center justify-center">
              <Icon size={18} />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-xs opacity-0 transition-all duration-300 ease-out group-hover:max-w-[16rem] group-hover:pr-4 group-hover:opacity-100 motion-reduce:transition-none">
              {handle}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
