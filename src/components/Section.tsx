import Image from 'next/image'

const Section = () => (
  <section className="flex flex-col items-center justify-center gap-5 lg:mx-[10%] lg:flex-row-reverse lg:self-center lg:pb-8 lg:pt-12">

    <div>
      <Image className="lg:hidden" width={750} height={564} src="./images/image-hero-mobile.png" alt="This man hold laptop" />
    </div>
    <div>
      <Image className="hidden lg:block" width={960} height={1280} src="./images/image-hero-desktop.png" alt="This man hold laptop" />
    </div>

    <div className="flex flex-col items-center gap-3 text-center lg:h-full lg:items-start lg:justify-end lg:gap-7 lg:pr-[7%] lg:text-left">

      <h1 className="px-2 text-2xl font-bold text-primary lg:p-0 lg:pr-8 lg:text-7xl">Make remote work</h1>

      <p className="px-3 pb-3  text-xs text-secondary lg:p-0 lg:pr-12 lg:text-lg">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button
        className="w-fit rounded-lg bg-primary px-4 py-2 text-xs text-accent lg:border-2 lg:px-5 lg:text-lg lg:hover:border-primary lg:hover:bg-neutral lg:hover:text-primary"
        type="button"
      >
        Learn more
      </button>
      <div className="flex w-full flex-row justify-evenly gap-1 p-2 pb-10 lg:items-center lg:justify-between lg:p-0 lg:pt-16">
        <div>
          <Image height="20" width="114" src="./images/client-databiz.svg" alt="client databiz" />
        </div>
        <div>
          <Image height="36" width="73" src="./images/client-audiophile.svg" alt="client audiophile" />
        </div>
        <div>
          <Image height="20" width="90" src="./images/client-meet.svg" alt="client meet" />
        </div>
        <div>
          <Image height="24" width="83" src="./images/client-maker.svg" alt="client maker" />
        </div>
      </div>
    </div>

  </section>
)

export default Section
