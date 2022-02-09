import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Xahy.dev</title>
        <meta name="description" content="Ismail Zahee's Dev Site" />
      </Head>
      <div className="max-w-xl mx-auto py-24 md:py-32 px-8 md:px-0 space-y-10">
        <div>
          <h2 className="text-5xl font-bold mb-12">Hi there, I&apos;m Zahee</h2>
          <div className="space-y-4">
            <p className="text-gray-600 leading-7">
              I am a Developer / Product Designer based in Maldives 🇲🇻
            </p>
            <p className="text-gray-600 leading-7">
              Started my career at{" "}
              <a
                target="_blank"
                href="https://sun.mv"
                className="hover-underline-animation"
                rel="noreferrer"
              >
                Sun Media Group
              </a>{" "}
              as a Web Developer. After that worked as a Lead Developer at{" "}
              <a
                target="_blank"
                href="https://avas.mv"
                rel="noreferrer"
                className="hover-underline-animation"
              >
                Avas.mv
              </a>{" "}
              and right now working as a Full-Stack Developer at{" "}
              <a
                target="_blank"
                href="https://lottiefiles.com"
                rel="noreferrer"
                className="hover-underline-animation"
              >
                LottieFiles
              </a>{" "}
            </p>
            <p className="text-gray-600 leading-7">
              In my spare time I do try to fiddle with Xcode to learn swift and
              play games.
            </p>
            <p className="text-gray-600 leading-7">
              You can find me on{" "}
              <a
                href="https://twitter.com/@xahyx"
                target="_blank"
                rel="noreferrer"
                className="hover-underline-animation"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://dribbble.com/xahy"
                target="_blank"
                rel="noreferrer"
                className="hover-underline-animation"
              >
                Dribbble
              </a>
              ,{" "}
              <a
                href="https://github.com/xahy"
                target="_blank"
                rel="noreferrer"
                className="hover-underline-animation"
              >
                Github
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/xahyx"
                target="_blank"
                rel="noreferrer"
                className="hover-underline-animation"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
