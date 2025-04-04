import { getRandomInterviewCover } from '@/utils'
import Image from 'next/image'
import dayjs from 'dayjs'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import DisplayTechIcons from './DisplayTechIcons'
import { Calendar, Star } from 'lucide-react'

const InterviewCard = ({ id, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

    return (
        <div className='card-border w-[360px] max-sm:w-full min-h-96'>
            <div className='card-interview'>
                <div>
                    <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-sm bg-zinc-50'>
                        <p className="badge-text text-zinc-950">{normalizedType}</p>
                    </div>

                    <Image src={getRandomInterviewCover()} alt="cover image" width={50} height={50} className="rounded-full object-fit size-[50px]" />

                    <h3 className="mt-5 capitalize">
                        {role} Interview
                    </h3>

                    <div className="flex flex-row gap-5 mt-3">
                        <div className="flex flex-row gap-2">
                            {/* <Image src="/calendar.svg" alt="calendar" width={22} height={22} /> */}
                            <Calendar size={20}/>

                            <p>{formattedDate}</p>
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            {/* <Image src="/star.svg" alt="star" width={22} height={22} /> */}
                            <Star size={20} />
                            <p>{feedback?.totalScore || '---'}/100</p>
                        </div>
                    </div>

                    <p className="line-clamp-2 mt-5">
                        {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <DisplayTechIcons techStack={techstack} />

                    <Button className='btn-primary'>
                        <Link href={feedback ? `/interview/${id}/feedback` : `/interview/${id}`}>
                            {feedback ? 'Check Feedback' : 'View Interview'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InterviewCard