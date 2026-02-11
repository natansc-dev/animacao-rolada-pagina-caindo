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
              <h1>E se seu site fosse assim?</h1>
            </div>
            <div className="col">
              <p>
                Scroll experience concept, onde cada movimento é pensado para criar uma experiência única.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="dois">
          <div className="container max-w-full">
            <div className="col">
              <div className="img rounded-4xl">
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
              <h1>Não é só design, É movimento.</h1>
              <p>
                O scroll deixa de ser navegação. Vira narrativa.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="tres">
          <div className="container max-w-full">
            <div className="col">
              <h1>Narrativa guiada por scroll</h1>
              <p>
                Cada transição é pensada para guiar a atenção.
              </p>
            </div>
            <div className="col flex justify-center items-center">
              <Image src="/tres.png" alt="Image" width={1200} height={904} className="rounded-4xl" />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="quatro">
          <div className="container max-w-full">
            <div className="img">
              <Image src="/quatro.png" alt="Image" width={900} height={1200} className="rounded-4xl" />
            </div>
            <h1>Experiência que prende atenção</h1>
            <p>
              Experiências não são estáticas.
            </p>
            <p>
              Cada transição existe para manter atenção, e transformar curiosidade em permanência.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="cinco">
          <div className="container max-w-full">
            <div className="col">
              <h1>Você usaria algo assim no seu projeto?</h1>
            </div>
            <div className="col">
              <p>
                Movimento gera percepção. Percepção gera valor.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="seis">
          <div className="container max-w-full">
            <div className="col">
              <h1>O FUTURO É INTERATIVO</h1>
            </div>
            <div className="col">
              <p>
                E isso é só o começo.
              </p>
            </div>
          </div>
        </section>

        <footer>
          <h1>Me segue aí</h1>
        </footer>
      </main>
    </>
  );
}
