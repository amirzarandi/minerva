import { Button } from "@/components/ui/button";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";
import { About } from "./_components/about";


const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <About />
      <Footer />
    </div>
  );
}

export default MarketingPage;