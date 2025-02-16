
import Agents from "./components/agents/page";
import Contact from "./components/contact/page";
import Features from "./components/features/page";
import Hero from "./components/Hero/page";
import Pricing from "./components/pricing/page";
import Technology from "./components/technology/page";

export default function Home() {
  return (
    <><Hero />
    <Technology />
    <Features />
    <Agents />
    <Pricing/>
    <Contact />
    </>
  );
}
