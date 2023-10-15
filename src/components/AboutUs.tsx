import { FaEquals } from "react-icons/fa"
import { GiFist } from "react-icons/gi"
import { HiLightBulb } from "react-icons/hi"
import { GiStumpRegrowth } from "react-icons/gi"
import { AiOutlineRead } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"

const features = [
    {
        name: 'Equity and Inclusion',
        description:
            'We honor the inherent worth of all community members and actively address systemic barriers, like poverty and criminalization, to create a fair and just environment. We strive for diversity as a cornerstone in our society, to dismantle structural inequalities.',
        icon: FaEquals,
    },
    {
        name: 'Intersectional Solidarity',
        description:
            'We stand in solidarity with those facing multiple layers of marginalization at the intersection of various identities, including individuals who use drugs. Our commitment to solidarity fosters an environment of support and empowerment for all.',
        icon: GiFist,
    },

    {
        name: 'Imagination and Creativity',
        description:
            'We embrace innovation as a fundamental principle to our approach. Fearless in our pursuit of new ideas, we strive to be pioneers in our field. By embracing creativity, we continuously seek inventive solutions that advance our mission and improve the lives of the communities we serve.',
        icon: HiLightBulb,
    },
    {
        name: 'Integrity and Growth',
        description:
            'Guided by transparency, we openly share our policies, strategies, and motivations. We hold ourselves accountable to our values, acknowledging missteps with humility. We actively engage in learning and evolution. We fulfil our promises through actions that reflect our commitments.',
        icon: GiStumpRegrowth,
    },
    {
        name: 'Continuous Learning for Community Impact',
        description:
            'Through ongoing education and reflection, we remain responsive and adaptable to the evolving needs of the communities we serve: refining our approaches based on insights gained from our experiences. We see challenges as opportunities for growth and continuously cultivate learning in all our pursuits.',
        icon: AiOutlineRead,
    },
    {
        name: 'Deep Community Connection',
        description:
            'Rooted in genuine community relationships, we prioritize the voices of individuals with lived experiences, their families, and the broader communities. These connections guide and enrich our work, enabling us to create meaningful and impactful change.',
        icon: IoIosPeople,
    },

]

export default function AboutUs() {
    return (
        <div id="about" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-lg font-extrabold leading-8 tracking-tight text-indigo-600">What We Do</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We are Involved in a number of community uplifting activities like:
                    </p>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                        
                    </p> */}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
