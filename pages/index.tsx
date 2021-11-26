import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen px-16 bg-indigo-100">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 w-32 h-32 bg-purple-300 rounded-full -left-5 md:-left-10 md:w-96 md:h-96 mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
        <div className="absolute top-0 w-32 h-32 bg-yellow-300 rounded-full -right-5 md:-right-10 md:w-96 md:h-96 mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute w-32 h-32 bg-pink-300 rounded-full left-20 md:-bottom-12 md:w-96 md:h-96 mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
        <Card />
      </div>
    </div>
  );
}
