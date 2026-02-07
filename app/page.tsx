'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    lenisRef.current?.lenis?.on(
      "scroll",
      ScrollTrigger.update
    );
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
          
    return () => gsap.ticker.remove(update);
  }, [])

  useGSAP(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
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
      })

      if (index === sections.length - 1) return;

      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        pinSpacing: false
      })
  }, {
    scope: containerRef,
    })
  })

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      
      <main ref={containerRef}>
        {/* Section 1 */}
        <section className="um">
          <div className="container">
            <div className="col">
              <h1>Hello World</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="dois">
          <div className="container">
            <div className="col">
              <div className="img">
                <Image src="/file.svg" alt="Image" width={100} height={100} />
              </div>
            </div>
            <div className="col">
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="tres">
          <div className="container">
            <div className="col">
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </p>
            </div>
            <div className="col">
              <div className="img">
                <Image src="/file.svg" alt="Image" width={100} height={100} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="quatro">
          <div className="container">
            <div className="img">
              <Image src="/file.svg" alt="Image" width={100} height={100} />
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
          <div className="container">
            <div className="col">
              <h1>Hello World</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="seis">
          <div className="container">
            <div className="col">
              <h1>Hello World</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
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
