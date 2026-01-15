import { useEffect, useRef } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | roasted garlic" },
    { name: "description", content: "Welcome to roasted garlic." },
  ];
};

const cards = [
  { id: 1, title: "30일 러닝 챌린지", emoji: "🏃" },
  { id: 2, title: "물 2L 마시기", emoji: "💧" },
  { id: 3, title: "매일 스트레칭", emoji: "🧘" },
  { id: 4, title: "설탕 끊기", emoji: "🍬" },
  { id: 5, title: "1만보 걷기", emoji: "👟" },
  { id: 6, title: "간헐적 단식", emoji: "⏰" },
];

function Card({ title, emoji }: { title: string; emoji: string }) {
  return (
    <div className="shrink-0 w-48 h-32 bg-background/80 rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 border border-border/30">
      <span className="text-3xl">{emoji}</span>
      <span className="text-sm font-medium text-foreground/80">{title}</span>
    </div>
  );
}

export default function Home() {
  const groupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    const track = trackRef.current;
    if (group && track) {
      const width = group.offsetWidth;
      track.style.setProperty("--marquee-distance", `-${width}px`);
    }
  }, []);

  return (
    <div className="bg-amber-200">
      <div className="px-20 pt-24 mt-30 flex flex-col items-center">
        <h1 className="text-8xl font-bold leading-tight tracking-tight">
          우리 같이, 다이어트
        </h1>
        <span className="text-4xl text-primary">roasted garlic.</span>
      </div>

      {/* Infinite scrolling cards */}
      <div className="mt-16 overflow-hidden">
        <div ref={trackRef} className="flex animate-scroll">
          {/* Original cards group */}
          <div ref={groupRef} className="flex gap-6 pr-6 shrink-0">
            {cards.map((card) => (
              <Card key={card.id} title={card.title} emoji={card.emoji} />
            ))}
          </div>
          {/* Duplicate cards group for seamless loop */}
          <div className="flex gap-6 pr-6 shrink-0">
            {cards.map((card) => (
              <Card
                key={`dup-${card.id}`}
                title={card.title}
                emoji={card.emoji}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
