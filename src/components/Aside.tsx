import Image from "next/image";

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
  </aside>
);

export default Aside;
