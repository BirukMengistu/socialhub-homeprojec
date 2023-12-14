import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Info, Network, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Trends = [
  {
    name: "Provide latest Information ",
    Icon: Info,
    description: "update latest Info",
  },
  {
    name: "Provide latest Events",
    Icon: Newspaper,
    description: "Provide latest Events!",
  },
  {
    name: "Provide latest Jobs",
    Icon: Network,
    description: "Provide latest Job Info ",
  },
];
export default function Home() {
  return (
    <>
      <MaxwidthWrapper>
        <div
          className="py-20 max-auto text-center flex flex-col
       items-center max-w-3xl"
        >
          <h1
            className="text-4xl font-bold tracking-tight 
      text-gray-900  sm:text-6xl"
          >
            Our Site for high-quality{" "}
            <span className="text-orange-600">digital Inforamtion.</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to EthioSwedenInfo center.Every published info is verified
            by our team to ensure our city quality standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/" className={buttonVariants()}>
              Browser Tranding
            </Link>
            <Button variant="outline"> Info Realiable sources &rarr;</Button>
          </div>
        </div>
      </MaxwidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxwidthWrapper className="py-20">
          <div
            className="grid grid-cols-1 gap-y-12 
                      sm:grid-cols-2 sm:gap-x-6
                      lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
          >
            {Trends.map((trend, index) => (
              <div
                key={index}
                className="text-center md:flex md:items-start
                   md:text-left lg:block lg:text-center"
              >
                <div
                  className="md:flex-shrink-0 flex justify-center"
                >
                   <div className="h-16 w-16 flex items-center justify-center 
                   rounded-full bg-orange-100 text-orange-900 ">
                   {<trend.Icon className="w-1/3 h-1/3" />}
                   </div>
                  
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900 ">
                      {trend.name}
                    </h3>  
                    <p className="mt-3 text-sm  text-muted-foreground">
                      {trend.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </MaxwidthWrapper>
      </section>
    </>
  );
}
