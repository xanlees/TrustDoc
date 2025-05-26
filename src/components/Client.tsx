'use client'

import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { Card } from "./ui/card";
import card from '../../public/client/card.png';
import passport from '../../public/client/passport.png';
import marriage from '../../public/client/marriage-certificate.png';
import driver from '../../public/client/driver.png';
import driverLicense from '../../public/client/driver-license.png';
import Image, { StaticImageData } from 'next/image';
import { BorderBeam } from "./magicui/border-beam";

const reviews = [
    {
        name: "ໜັງສືຜ່ານແດນ",
        username: "@passport",
        img: passport,
    },
    {
        name: "ວີຊ່າທ່ອງທ່ຽວ",
        username: "@visa",
        img: card,
    },
    {
        name: "ໃບຂັບຂີ່",
        username: "@driver license",
        img: driver,
    },
    {
        name: "ໃບຂັບຂີ່ສາກົນ",
        username: "@international driver license",
        img: driverLicense,
    },
    {
        name: "ໃບແຕ່ງງານ",
        username: "@marriage certificate",
        img: marriage,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
}: {
    img: StaticImageData;
    name: string;
    username: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDetail3D() {
    return (
        <Card className="relative mx-auto max-w-[1320px] flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] mt-10 mb-10">
            <div
                className="flex flex-row items-center justify-center gap-4"
                style={{
                    transform:
                        "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                }}
            >
                <div className="w-1/2 md:w-auto"> {/* Adjust width for responsiveness */}
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
                <div className="hidden md:block w-1/2"> {/* Hide on small screens, show on medium and up */}
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
                <div className="hidden md:block"> {/* Hide on small screens */}
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {thirdRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
                <div className="w-1/2 md:w-auto"> {/* Hide on small screens */}
                    <Marquee pauseOnHover className="[--duration:20s]" vertical>
                        {fourthRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
                <div className="hidden md:block"> {/* Hide on small screens */}
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {thirdRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
                <div className="hidden md:block w-1/2"> {/* Hide on small screens, show on medium and up */}
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background hidden md:block"></div> {/* Hide on small screens */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background hidden md:block"></div> {/* Hide on small screens */}
            <BorderBeam
                duration={10}
                size={200}
                colorTo='yellow'
            />
        </Card>
    );
}