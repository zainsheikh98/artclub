import type { NextPage } from "next";
import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import Voice from "../components/Home/Voice";
import Reviews from "../components/Home/Reviews";
import Rewards from "../components/Home/Rewards";

const Apps: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <Voice />
            <Reviews />
            <Rewards />
        </Layout>
    );
};

export default Apps;
