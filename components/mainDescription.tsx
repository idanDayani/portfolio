import TypingEffect from "./typingEffect";

export function MainDescription() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
        Hellow, Im
      </h1>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-yellow-1000">
        Idan Dayani
      </h1>
      <div>
        <div className="mx-auto max-w-[700px] md:text-xl">
          Im a Full Stack developer and team lead, I specialize in crafting
          scalable, high-performance applications that drive business success.
        </div>
        <div className="flex flex-row">
          <div className="md:text-xl mr-1">I am experienced with </div>
          <TypingEffect />
        </div>
      </div>
    </div>
  );
}
