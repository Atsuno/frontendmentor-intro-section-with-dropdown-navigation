const Footer = () => (
  <footer className="text-center text-xs  [&_a]:text-alink">
    <div className="flex w-screen flex-row justify-between px-5">
      <img className="h-3" src="./images/client-databiz.svg" alt="client databiz" />
      <img className="h-5" src="./images/client-audiophile.svg" alt="client audiophile" />
      <img className="h-3" src="./images/client-meet.svg" alt="client meet" />
      <img className="h-4" src="./images/client-maker.svg" alt="client maker" />
    </div>
    Challenge by
    {' '}
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
    .
    Coded by
    {' '}
    <a href="https://github.com/Atsuno" target="_blank" rel="noreferrer">Atsuno</a>
    .
  </footer>
)

export default Footer
