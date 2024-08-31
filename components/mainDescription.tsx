import TypingEffect from "./typingEffect";

export function MainDescription() {
  return (
    <div className="space-y-2 mb-20 lg:mb-0">
      <h1 className="text-5xl font-bold tracking-tighter lg:text-6xl/none">
        Hellow, I&apos;m
      </h1>
      <h1 className="text-5xl font-bold tracking-tighter lg:text-6xl/none text-yellow-1000">
        Idan Dayani
      </h1>
      <div>
        <div className="mx-auto max-w-[700px] text-lg md:text-xl">
          Im a Full Stack developer and team lead, I specialize in crafting
          scalable, high-performance applications that drive business success.
        </div>
        <div className="flex flex-row">
          <div className="text-lg md:text-xl mr-1">I&apos;m experienced with</div>
          <TypingEffect />
        </div>
      </div>
    </div>
  );
}
