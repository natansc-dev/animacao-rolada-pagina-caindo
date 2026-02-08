"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { type LenisRef } from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef<LenisRef | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach(
      (section, index) => {
        const container = section.querySelector(".container");

        gsap.to(container, {
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });

        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      },
      {
        scope: containerRef,
      },
    );
  });

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <main ref={containerRef}>
        {/* Section 1 */}
        <section className="um">
          <div className="container max-w-full">
            <div className="col">
              <h1>Hello World</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="dois">
          <div className="container max-w-full">
            <div className="col">
              <div className="img">
                <Image
                  src="/dois.png"
                  alt="Image"
                  width={673}
                  height={1200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="col">
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="tres">
          <div className="container max-w-full">
            <div className="col">
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
            <div className="col">
              <div className="img">
                <Image src="/tres.png" alt="Image" width={1200} height={904} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="quatro">
          <div className="container max-w-full">
            <div className="img">
              <Image src="/quatro.png" alt="Image" width={900} height={1200} />
            </div>
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="cinco">
          <div className="container max-w-full">
            <div className="col">
              <h1>Hello World</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="seis">
          <div className="container max-w-full">
            <div className="col">
              <h1>Hello World</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
        </section>

        <footer>
          <h1>Footer</h1>
        </footer>
      </main>
    </>
  );
}
