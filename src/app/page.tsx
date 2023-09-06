import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-indigo-800">
      <div className="w-full h-96 bg-indigo-600" style={{ height: "80vh" }}>
        <nav className="w-full p-8 flex justify-between align-center">
          <span className="text-2xl">Dylan Cortez-Modell</span>
          <span className="text-4xl">+</span>
        </nav>
      </div>
      <div className="w-full h-96" style={{ height: "80vh" }}>
        <h1 className="text-4xl">It's all about experience</h1>
        <p className="text-sm">
          We're not selling “big agency services at small agency prices”. We
          deliver exceptional design solutions to complex business problems -
          extremely efficiently and delivered at lightning-fast pace.
          <br />
          <br />
          It's our approach that's different. We won't bring an army to the
          battle. We bring a lean team of experts with bags of experience to the
          table, who will quickly get to the heart of what you're looking to
          achieve.
          <br />
          <br />
          Our experience has built us an enviable reputation for consistently
          delivering the wow factor, underpinned with intelligent and thoughtful
          design that is focused on delivering a clear return on your
          investment. Whether you're looking for a full project solution or
          require specific design skills to complement your in-house team, we
          deliver solutions that pack a real punch.
        </p>
        <a className="text-4xl">Let's Talk</a>
      </div>
    </main>
  );
}
