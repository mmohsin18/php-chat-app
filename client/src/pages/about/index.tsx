import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";

function About() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="h-fit p-6 text-sm bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:[60vw] rounded-3xl grid xl:grid-cols-2">
        <div>
          <h1 className="font-bold text-2xl text-center">
            Welcome to PureKonnect
          </h1>
        </div>
        <div className="grid md:grid-cols-2 justify-between items-center p-5">
          <div className="">
            <div className="flex flex-col gap-3">
              <p className="text-[12px] tracking-tight leading-4">
                At PureKonnect, we believe in celebrating the beauty of
                connection and communication. This app was created with love and
                dedication for a very special person, Porshia Kabir, whose
                initials, PK, are subtly embedded in the name of our app.
              </p>
              <p className="text-[12px] tracking-tight leading-4">
                Whether you're looking to stay in touch with friends, share
                special moments, or simply chat with loved ones, PureKonnect is
                here to make those connections meaningful and beautiful. Join us
                in celebrating the art of communication with elegance and
                warmth.
              </p>
              <p className="text-[12px] tracking-tight leading-4">
                Thank you for choosing PureKonnect. We hope you enjoy using the
                app as much as we enjoyed creating it.
              </p>
                <div>
                    <p className="text-[12px]">Warm regards,</p>
                    <strong>Mr. Musi</strong><br />
                    <p className="text-[9px]">Founder, PureKonnect</p>
                </div>
                <p></p>
            </div>
          </div>
          <div className="">
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Our Story</AccordionTrigger>
                  <AccordionContent>
                    PureKonnect was born out of a desire to create a unique and
                    personal space for meaningful conversations. Inspired by the
                    warmth and joy that Porshia brings into my life, this
                    messenger app is a tribute to her and our shared moments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Why PureKonnect?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      PureKonnect isn't just another chat app; it's designed to
                      make conversations intimate and special. With a sleek,
                      user-friendly interface inspired by Porshia's elegance, it
                      ensures delightful connections. Privacy is our priority,
                      keeping your conversations secure and private for peace of
                      mind.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Our Vision</AccordionTrigger>
                  <AccordionContent>
                    Our vision is to create a platform where every conversation
                    feels special and personal. Inspired by my love, Porshia
                    Kabir, PureKonnect aims to bring a touch of beauty and
                    affection to every chat, making each interaction memorable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <Button><a href="/profile">Continue to Chat</a></Button>
      </div>
    </div>
  );
}

export default About;
