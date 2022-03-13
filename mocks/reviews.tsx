type ReviewsType = {
    content: string;
    author?: {
        name: string;
        position: string;
        avatar: any;
    };
    logo?: {
        url: any;
        width: number;
        height: number;
        alt: string;
    };
};

const reviews: ReviewsType[] = [
    {
        content:
            "Art is magical, but it’s not magic. It’s a neurological product, and we can study this neurological product the same way we study other complex processes such as language",
        author: {
            name: "Charles Limb",
            position: "“neuroscientist”",
            avatar: "/images/parrots.jpg",
        },
    },
    {
        content:
            "Learn the rules like a pro, so you can break them like an artist.",
        author: {
            name: "Pablo Picasso",
            position: "",
            avatar: "",
        },
    },
    {
        content: "Art washes away from the soul the dust of everyday life.",
        author: {
            name: "Pablo Picasso",
            position: "",
            avatar: "",
        },
    },
    {
        content: "Art is the lie that enables us to realize the truth.",
        author: {
            name: "Pablo Picasso",
            position: "",
            avatar: "",
        },
    },
];

export { reviews };
