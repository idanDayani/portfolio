export function MainDesc(props: { title: string; description: string }) {
    const { title, description } = props;
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight ">{title}</h1>
            <p className="text-left mt-4 mb-4 md:text-center max-w-4xl mx-auto">{description}</p>
        </div>
    );
}
