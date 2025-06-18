import Image from "next/image";
import GitHubIcon from "../../public/github-mark.svg";
import LinkedInIcon from "../../public/linkedin.svg";

const Aside = () => (
  <aside className="flex flex-col items-center pb-2 lg:items-start lg:max-h-screen lg:py-5 lg:sticky top-0">
    <div className="h-[280px] w-[280px] overflow-hidden rounded-full">
      <Image
        className="mt-[-40px]"
        src="/me.jpg"
        alt="Picture of Tyler Zieske, Application Developer"
        height={280}
        width={280}
      />
    </div>

    <h1 className="font-bold py-1.5">Tyler Zieske</h1>

    <h3 className="font-semibold">Application Developer</h3>

    <div className="flex gap-1 pt-1.5">
      <a href="https://github.com/tylerzisk" target="_blank">
        <GitHubIcon
          className="fill-neutral-50 transition delay-50 duration-300 ease-in-out hover:fill-neutral-400"
          height={28}
          width={28}
        />
      </a>

      <a href="https://www.linkedin.com/in/tylerzieske/" target="_blank">
        <LinkedInIcon
          className="fill-neutral-50 transition delay-50 duration-300 hover:fill-neutral-400"
          height={28}
          width={28}
        />
      </a>
    </div>
  </aside>
);

export default Aside;
