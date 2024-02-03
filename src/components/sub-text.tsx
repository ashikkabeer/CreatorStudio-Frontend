"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minus rerum nemo tempore inventore nulla enim voluptatibus? 
`;
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
