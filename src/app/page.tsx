import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section from '@/components/Section'

const Home = () => (
  <main className="flex min-h-screen flex-col bg-accent text-secondary lg:max-w-7xl lg:pt-5">
    <Header />
    <Section />
    <Footer />
  </main>
)

export default Home
