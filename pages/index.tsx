import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <div className="h-screen md:h-[min(100vh,100vw)] md:min-h-[640px] w-screen flex justify-center bg-black overflow-hidden">
        <div className="flex flex-col relative mt-[8.666666vh] md:mt-[min(8.666666vh,8.666666vw)] w-[90%] h-5/6 max-w-6xl rounded-3xl bg-white/5">
          <div
            className="absolute w-32 h-64 right-0 top-0 -rotate-45 blur-2xl"
            style={{
              background: "radial-gradient(rgba(1,65,255,.2),rgba(0,0,0,0))",
            }}
          />
          <div
            className="absolute w-64 h-96 bottom-0 rounded-[50%] blur-2xl"
            style={{
              background:
                "linear-gradient(to bottom right,rgba(0,0,0,0),rgba(1,65,255,.3))",
            }}
          />
          <NavBar />

          <main className="relative flex flex-1 flex-col-reverse md:flex-row w-full">
            <div className="w-full md:w-1/2 h-1/2 md:h-auto flex justify-center items-center p-8 pt-0 md:pt-8">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold bg-clip-text text-transparent" style={{
                    backgroundImage:
                      " linear-gradient(135deg, #ffdd00 0%, #fbb034 100%)",
                  }}>
                EVERYTHING IS ABOUT WRITE YOUR CONTENT, READ BY OTHERS, AND
                START EARNING
              </h1>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-auto flex justify-center items-center p-8 pb-0 md:pb-8">
              <Image
                className="max-w-xs md:max-w-md max-h-full flex aspect-square"
                src={"/ContentImage.png"}
                alt="Content Image"
                width={400}
                height={400}
              />
            </div>
          </main>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}
