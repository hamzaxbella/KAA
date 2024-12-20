import Map from "@/components/Map";
import PageTitle from "@/components/PageTitle";
import Projects from "@/components/Projects";
import React from "react";

export const revalidate = 1 // revalidate the data every 30 seconds

const page = () => {
  return (
    <main className="max-container relative z-10 bg-transparent">
      <div className="section-spacing">
        <PageTitle title={'toute nos réalisations'} />
        <section className="mt-24">
          <Projects/>
        </section>
        <section>
          <Map />
        </section>
      </div>
    </main>
  );
};

export default page;
