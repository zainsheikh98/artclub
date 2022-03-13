import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import cn from "classnames";
import smoothscroll from "smoothscroll-polyfill";
import styles from "./Layout.module.sass";
import Header from "../Header";
import Footer from "../Footer";

type LayoutProps = {
    headerVisible?: boolean;
    headerClassName?: string;
    innerNoOverflow?: boolean;
    footerClassName?: string;
    hideHeader?: boolean;
    hideFooter?: boolean;
    children: React.ReactNode;
};

const Layout = ({
    headerVisible,
    headerClassName,
    innerNoOverflow,
    footerClassName,
    hideHeader,
    hideFooter,
    children,
}: LayoutProps) => {
    const router = useRouter();
    const title = "ArtClub by Artistic Areej";
    const description = "Art, Art, Just Art!";

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;

        document.body.appendChild(script);
        smoothscroll.polyfill();

        return () => {
            document.body.removeChild(script);
        };
    }, [router.pathname]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:card" content="summary" />
                <link rel="icon" href="/images/palette.png" />
            </Head>
            <div className={styles.layout}>
                {!hideHeader && (
                    <Header
                        className={headerClassName}
                        headerVisible={headerVisible}
                    />
                )}
                <div
                    className={cn(styles.inner, {
                        [styles.innerNoOverflow]: innerNoOverflow,
                    })}
                >
                    {children}
                </div>
                {!hideFooter && <Footer className={footerClassName} />}
            </div>
        </>
    );
};

export default Layout;
