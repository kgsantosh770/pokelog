import Chip from "@/components/Chip"
import getPageTitle from "@/utils/getPageTitle"
import { GitHub } from "@mui/icons-material"
import Head from "next/head"

const About = () => {

    const APP_NAME = process?.env?.NEXT_PUBLIC_APPNAME
    const techStack = ['React.js', 'Next.js', 'HTML', 'TailwindCSS', 'Typescript', 'GraphQL', 'ApolloClient']

    return (
        <>
            <Head>
                <title>{getPageTitle("About")}</title>
            </Head>
            <div className='py-3 px-4 max-w-xl mx-auto'>
                <h1 className='text-xl font-bold mb-4 sm:text-3xl text-center uppercase'>{APP_NAME}</h1>
                <div className="flex flex-wrap">
                    <p className='text-xl mb-3 mt-5 font-medium basis-full'>Tech stacks used:</p>
                    {
                        techStack.map((tech: string, index: number) => (
                            <Chip key={index}
                                className="bg-green-700 mx-2 my-2"
                                chipText={tech}
                            />
                        ))
                    }
                </div>
                <div className="my-10">
                    <p className='text-xl mb-3 font-medium basis-full'>Developer Note:</p>
                    <ul className="list-disc ml-4">
                        <li>Hey there !!!. My name is <b>Santosh</b></li>
                        <li>I have developed this web application as a part of <i>Buycep</i> assignment.</li>
                        <li>The source code is available in <a href="" className="text-sky-500">Github</a> </li>
                        <li>I have deployed the app in <i>Vercel</i> platform.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About