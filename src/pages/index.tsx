import SmoothScroll from "@/components/SmoothScroll";
import Image from "next/image";

export default function Home() {
  const items = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <SmoothScroll>
      <main className="w-[90%] max-w-3xl mx-auto py-10">
        <section className="flex flex-col gap-10">
          {items.map((index) => (
            <ListItem key={index} index={index} />
          ))}
        </section>
      </main>
    </SmoothScroll>
  );
}

const ListItem: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div className="flex gap-4 bg-neutral-200 p-4 rounded-xl">
      <div className="h-64 aspect-video relative">
        <Image src="/image.jpg" alt="image" fill />
      </div>
      <div>
        <h1 className="font-bold">Item #{index}</h1>
        <p className="text-sm">Some nice content here.</p>
      </div>
    </div>
  );
};
