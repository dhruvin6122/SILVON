import Hero from "@/components/Hero";
import Factory from "@/components/Factory";
import Products from "@/components/Products";
import Owners from "@/components/Owners";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Factory />
            <Products />
            <Owners />
            <Location />
            <Contact />
        </div>
    );
}
