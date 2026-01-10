
export default function Heromain() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/homevideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="front"></div>
        </section>
    )
}