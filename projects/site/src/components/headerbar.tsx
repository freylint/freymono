"use client";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderBar() {
  return (
    <div className="bg-gray flex flex-row text-white h-hbar">
      <FGBranding />
      <nav className="flex-row hidden md:flex m-3 grow">
        <p>Home</p>
        <p>Posts</p>
        <p>Projects</p>
      </nav>
      <div className="m-3 hidden md:flex flex-row min-w-fit">
        <HeaderBarIcon icon={faGithub} />
        <HeaderBarIcon icon={faLinkedin} />
        <HeaderBarIcon icon={faTwitter} />
      </div>
      <p className="m-3 md:hidden">BURGER</p>
    </div>
  );
}

export function FGBranding() {
  return (
    <div className="flex items-center justify-between min-w-fit">
      <p className="m-3 text-center">Freyground</p>
    </div>
  );
}

interface HeaderBarIconProps {
  icon: IconDefinition;
}

export function HeaderBarIcon(props: HeaderBarIconProps) {
  return <FontAwesomeIcon className="min-h-full" icon={props.icon} />;
}
