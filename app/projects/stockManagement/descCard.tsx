export function DescCard(props: { title: string; description: string }) {
  const { title, description } = props;
  return (
    <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
