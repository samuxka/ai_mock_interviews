import { cn } from '@/lib/utils'
import { getTechLogos } from '@/utils'
import Image from 'next/image'
import React from 'react'

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
    const techIcon = await getTechLogos(techStack)

    return (
        <div className='flex flex-row gap-1'>{techIcon.slice(0, 3).map(({tech, url}, index) => (
            <div key={tech} className={cn("relative group bg-dark-300 rounded-full p-2 flex-center hover:-translate-y-1 transition-all", index >= 1 && "-ml-4")}>
                <span className="tech-tooltip">tech</span>
                <Image src={url} alt={tech} width={10} height={10} className='size-5'/>
            </div>
        ))}</div>
    )
}

export default DisplayTechIcons