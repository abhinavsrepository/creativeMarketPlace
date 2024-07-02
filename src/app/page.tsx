import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const perks =[{
  name:"Instant Delicery "
}]
export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Marketplace for high-quality{" "}
          <span className="text-blue-600">Digital Assets</span>.
        </h1>
        <p className="mt-6 text-lg  max-w-prose text-muted-foreground">
          {" "}
          Welcome to IrisDesign. Every asset on our platform is verified by our
          team to ensure our highest quality standards{" "}
          <span className="text-blue-600"></span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending Products
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>/
      {/* to dom list product  */}
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

      </div>
      
    </section>
    </>
  );
}
