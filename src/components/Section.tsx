import Image from 'next/image'

const Section = () => (
  <section className="flex flex-col items-center justify-center gap-5 lg:w-full lg:flex-row-reverse lg:px-32 lg:pb-10">
    <Image className="lg:hidden" width={750} height={564} src="./images/image-hero-mobile.png" alt="This man hold laptop" />
    <Image className="hidden lg:block lg:w-5/12" width={960} height={1280} src="./images/image-hero-desktop.png" alt="This man hold laptop" />

    <div className="flex flex-col items-center gap-3 text-center lg:h-full lg:items-start lg:justify-end lg:gap-7 lg:pr-24 lg:text-left">

      <h1 className="px-2  text-2xl font-bold text-primary lg:p-0 lg:pt-16 lg:text-7xl">Make remote work</h1>

      <p className="px-3 pb-3  text-xs text-secondary lg:p-0 lg:pr-12 lg:text-lg">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button
        className="w-fit rounded-lg bg-primary px-4 py-2 text-xs text-accent lg:border-2  lg:px-5 lg:text-lg lg:hover:border-primary lg:hover:bg-neutral lg:hover:text-primary"
        type="button"
      >
        Learn more
      </button>
      <div className="flex w-full flex-row flex-wrap justify-between gap-1 p-2 pb-10 lg:items-center lg:p-0 lg:pt-16">
        <Image height="20" width="114" className="h-3 w-10 lg:h-5 lg:w-24" src="./images/client-databiz.svg" alt="client databiz" />
        <Image height="36" width="73" className="h-5 w-12 lg:h-8 lg:w-16" src="./images/client-audiophile.svg" alt="client audiophile" />
        <Image height="20" width="90" className="h-3 w-11 lg:h-4 lg:w-20" src="./images/client-meet.svg" alt="client meet" />
        <Image height="24" width="83" className="h-4 w-11 lg:h-6 lg:w-20" src="./images/client-maker.svg" alt="client maker" />
      </div>
    </div>

  </section>
)

export default Section
