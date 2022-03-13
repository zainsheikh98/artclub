import cn from "classnames";
import styles from "./Reviews.module.sass";
import Heading from "../../Heading";
import Image from "../../Image";
import ButtonEarlyAccess from "../../ButtonEarlyAccess";
import Feature from "../Feature";

import { reviews } from "../../../mocks/reviews";

type ReviewsProps = {};

const Reviews = ({}: ReviewsProps) => (
    <div id="reviews" className={cn("section", styles.reviews)}>
        <div className={cn("container", styles.container)}>
            <Heading
                className={styles.head}
                title="“Creativity is allowing oneself to make mistakes. Art is knowing which ones to keep.”"
            />
            <Feature item={reviews[0]} />
            <div className={styles.list}>
                {reviews.slice(1).map((review, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.content}>“{review.content}”</div>
                        {review.author && (
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {review.author.avatar && (
                                        <Image
                                            src={review.author.avatar}
                                            width={48}
                                            height={48}
                                            alt="Avatar"
                                        />
                                    )}
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.person}>
                                        {review.author.name}
                                    </div>
                                    <div className={styles.position}>
                                        {review.author.position}
                                    </div>
                                </div>
                            </div>
                        )}
                        {review.logo && (
                            <div className={styles.logo}>
                                <Image
                                    src={review.logo.url}
                                    width={review.logo.width}
                                    height={review.logo.height}
                                    alt={review.logo.alt}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.btns}>
                <ButtonEarlyAccess className={styles.button} />
            </div>
        </div>
    </div>
);

export default Reviews;
