
"use client";

import { Card } from "flowbite-react";

export default function Component({cardData}) {
  return (
    <Card
      className="max-w-sm flex flex-col justify-start items-start min-w-[200px] "
      imgAlt="image alt text"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {cardData.abbr} - {cardData.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {cardData.description}
      </p>
    </Card>
  );
}
