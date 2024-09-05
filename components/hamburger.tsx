export function Hamburger(props: { isOpen: boolean; onClick: () => void }) {
  const { isOpen, onClick } = props;

  const firstSpanStyle = isOpen
    ? "group-hover:translate-y-1.5 group-hover:rotate-45"
    : "";
  const secondSpanStyle = isOpen
    ? "group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"
    : "";

  return (
    <>
      <div
        className="group flex space-y-2  h-20 w-20 z-50 cursor-pointer items-center justify-center rounded-3xl p-2 sm:hidden"
        onClick={onClick}
      >
        <div className="space-y-2">
          <span
            className={`block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out ${firstSpanStyle}`}
          ></span>
          <span
            className={`block h-1 w-8 origin-center rounded-full bg-yellow-1000 transition-transform ease-in-out ${secondSpanStyle}`}
          ></span>
        </div>
      </div>
    </>
  );
}
