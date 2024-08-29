import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Head from "next/head";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solomon Sala&apos;s Portfolio</title>
        <meta
          name="description"
          content="Explore the diverse portfolio of Solomon Sala, a talented full stack developer with expertise in a wide range of modern web technologies. Browse his latest projects and learn more about his skills and experience."
        />
        <meta
          name="keywords"
          content="full stack developer, portfolio, Next.js, React, JavaScript, Node.js, MongoDB, SQL, UI/UX, Redux, Express, Tailwindcss, Evangadi-Forum, Front-End, Back-End, web development"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:image" content="/evantu.jpeg" />
        <meta property="og:image:alt" content="Evangadi-Forum" />
        <meta
          property="og:image"
          content="https://technicallyautonomous.com/wp-content/uploads/2021/05/amazon-homepage-review-blog-thumbnail.png"
        />
        <meta property="og:image:alt" content="Amazon" />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_I5etwThxKvIqw4uRacCAm6a6yTaKNCrT-LwvNquhtgs86aLZMy65QE4QA&s"
        />
        <meta property="og:image:alt" content="Netflix" />
        <meta
          property="og:image"
          content="https://s3-alpha.figma.com/hub/file/2474165922/a64a284d-5cdd-49f3-a990-b4731a6953b9-cover.png"
        />
        <meta property="og:image:alt" content="Apple" />
        <meta property="og:image" content="/SolomonSala.jpg" />
        <meta property="og:image:alt" content="Certificate" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:image" content="/evantu.jpeg" />
        <meta name="twitter:image:alt" content="Evangadi-Forum" />
        <meta
          name="twitter:image"
          content="https://technicallyautonomous.com/wp-content/uploads/2021/05/amazon-homepage-review-blog-thumbnail.png"
        />
        <meta name="twitter:image:alt" content="Amazon" />
        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_I5etwThxKvIqw4uRacCAm6a6yTaKNCrT-LwvNquhtgs86aLZMy65QE4QA&s"
        />
        <meta name="twitter:image:alt" content="Netflix" />
        <meta
          name="twitter:image"
          content="https://s3-alpha.figma.com/hub/file/2474165922/a64a284d-5cdd-49f3-a990-b4731a6953b9-cover.png"
        />
        <meta name="twitter:image:alt" content="Apple" />
        <meta name="twitter:image" content="/SolomonSala.jpg" />
        <meta name="twitter:image:alt" content="Certificate" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="../public/amazon.png" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/x-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            {/* <Transition/> */}
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
