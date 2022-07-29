import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <div><Image src="/poster-main.jpg" alt="HonjoHighSchool Logo" width={514} height={728} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}