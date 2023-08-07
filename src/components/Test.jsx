import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fdata } from "./data1.jsx";
gsap.registerPlugin(ScrollTrigger);
const Test = () => {
  const [tdata, setTdata] = useState(fdata);
  const app = useRef();

  useEffect(() => {
    const container = gsap.utils.toArray(".container");
    const data_box = gsap.utils.toArray(".data_box");

    data_box.forEach((element, i) => {

      gsap.context(() => {
        const ctx = gsap.to(element, {
          opacity: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: container[i],
            start: "top top",
            pin: true,
            toggleActions: "play none none reset",
            pinSpacing: false,
          },
        });
        return () => ctx.revert();
      });
    });
  });

  useLayoutEffect(() => {
    const container = gsap.utils.toArray(".container");
    const data_box = gsap.utils.toArray(".data_box");
    const text = gsap.utils.toArray(".text");

    text.forEach((element, i) => {
      if(i!==0){
        const ctx = gsap.to(text[i-1], {
          transform: "translateY(80px) translateZ(-100px) rotateX(-80deg)",
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: container[i],
            start: "top 2%",
            end: "botom 10%",
            toggleActions: "play none reverse reverse",
          },
        });
        return () => ctx.revert();    
        }
    });
  });
  useLayoutEffect(() => {
    const container = gsap.utils.toArray(".container");
    const data_box = gsap.utils.toArray(".data_box");
    const img = gsap.utils.toArray("img");

    img.forEach((element, i) => {
      if(i!==0){
        const ctx = gsap.to(img[i], 2,{
          width: "100%",
          duration: 1,
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: container[i],
            start: "top 2%",
            end: "botom 15%",
            toggleActions: "play none reverse reverse",
          }
        });
        return () => ctx.revert();    
        }
    });
  });
  useLayoutEffect(() => {
    const container = gsap.utils.toArray(".container");
    const data_box = gsap.utils.toArray(".data_box");
    const img = gsap.utils.toArray("img");

    img.forEach((element, i) => {
      if(i%2==0){
        const ctx = gsap.to(img[i], 2,{
          width: "100%",
          duration: 1,
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: container[i],
            start: "top 2%",
            end: "botom 15%",
            toggleActions: "play none reverse reverse",
          }
        });
        return () => ctx.revert();    
        }
        else{
          if(i==5){
            const ctx = gsap.to(img[i], 2,{
              rotate: 360,
              duration: 1,
              ease: Power3.easeInOut,
              scrollTrigger: {
                trigger: container[i],
                start: "top 2%",
                end: "botom 15%",
                toggleActions: "play none reverse reverse",
              }
            });
            return () => ctx.revert();    
            }
            else {
              const ctx = gsap.to(img[i], 2,{
                height: "100%",
                duration: 1,
                ease: Power3.easeInOut,
                scrollTrigger: {
                  trigger: container[i],
                  start: "top 2%",
                  end: "botom 15%",
                  toggleActions: "play none reverse reverse",
                }
              });
              return () => ctx.revert();    
              }
        }
      
    });
  });

  // last div 
  useLayoutEffect(() => {
    const container = gsap.utils.toArray(".container");
    const data_box = gsap.utils.toArray(".data_box");
    const contnr_last= gsap.utils.toArray(".contnr_last");

    contnr_last.forEach((element, i) => {
        const ctx = gsap.to(element, 2,{
          opacity: 1,
          // rotate: 360,
          // width: "100%",
          // scale: 1,
          duration: 1,
          x:100,
          // animation: rot 1s 
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: container[container.length-1],
            start: "top 2%",
            end: "botom 15%",
            toggleActions: "play none reverse reverse",
            markers:true,
          }
        });
        return () => ctx.revert();    
        })
      
    });
  return (
    <>
    <div className="container-box">

      <div className="containers">
        {tdata.map((i) => (
          <div className="container" key={i.id}></div>
        ))}
        <div className="container"></div>
        <div className="container"></div>
      </div>

      {/* data part  */}

      <div className="data_contnr">
        {tdata.map((i,ind) => (
          <div
            className="data_box"
            key={i.id}
            style={{ backgroundImage: `url(${i.back_img})` }}
          >
            <div className="imga">
             
            <img src={i.frnt_img} alt={i.frnt_img}  className={(ind%2==0)? "xaxis":(ind==5)?"rott":"yaxis"} />
            </div>
              
            <h1 className="text">{i.t_content}</h1>
          </div>
        ))}
      </div>
      

      {/* <div className="last-boxes">
      <div className="contnr_last clr1">
        <h1>Circularity</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quidem.</p>
      </div>
      <div className="contnr_last clr2">
        <h1>Climate</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quidem.</p>
      </div>
      <div className="contnr_last clr3">
        <h1>Platform</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quidem.</p>
      </div>
      <div className="contnr_last clr4">
        <h1>Strategy</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quidem.</p>
      </div>

      </div> */}
    </div>
    </>

   
  );
};

export default Test;
