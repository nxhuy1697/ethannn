import React from 'react'
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NewsCard() {
  return (
    <ScrollArea className="h-[550px] p-2 border border-accent rounded">
    <div className='flex flex-col space-y-2'>
    <Image src='/details.jpg' alt='forest' width={1100} height={1000} />
    <p className='text-lg font-semibold'>Title</p>
    <p className='text-sm text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ea odio quae quod. Consectetur molestiae quis veniam fugiat. Nulla nesciunt eius tempora vel possimus, quos deleniti quasi mollitia dolorum sequi repudiandae aspernatur expedita non incidunt suscipit animi dolor odio in exercitationem beatae cupiditate, veniam, officiis officia! Fugit rerum odio dolorum illum nobis similique eligendi provident et commodi veritatis possimus aliquid, eius tenetur magni natus facere placeat earum? Eaque recusandae non quas distinctio a voluptatibus eius repudiandae soluta amet hic fugiat, provident eligendi architecto omnis? Veniam inventore culpa, quibusdam eum porro, dolore aperiam maxime unde, obcaecati explicabo tempore dignissimos illum sed!</p>
</div>

    </ScrollArea>
  )
}
