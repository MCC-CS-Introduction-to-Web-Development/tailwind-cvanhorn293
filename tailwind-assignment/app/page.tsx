import Image from "next/image";

export default function Home() {
    return (
        <section>
            <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <ul className="flex space-x-4">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </ul>
            </nav>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Tailwind Page</h1>
                <p className="text-lg mb-8">This is a simple page styled with Tailwind CSS.</p>
            </div>
        </section>
    );
}
