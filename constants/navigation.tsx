import { facebook_page, insta_page } from "./urls";

export type MenuType = {
    icon: string;
    title: string;
    url: string;
};

export type NavigationType = {
    title: string;
    section: string;
};

const HeaderNavigationList: NavigationType[] = [
    {
        title: "Creativity & Art",
        section: "reviews",
    },
    {
        title: "Tools",
        section: "rewards",
    },
];

type FooterNavigationType = {
    title: string;
    section: string;
};

const FooterNavigationList: FooterNavigationType[] = [
    {
        title: "Creativity & Art",
        section: "reviews",
    },
    {
        title: "Tools",
        section: "rewards",
    },
];

export { HeaderNavigationList, FooterNavigationList };
