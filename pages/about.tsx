// imports from packages
import Head from "next/head"
import { LinkedIn } from "@mui/icons-material"

// imports from app
import Chip from "@/components/Chip"
import getPageTitle from "@/utils/getPageTitle"

const About = () => {

    const APP_NAME = process?.env?.NEXT_PUBLIC_APPNAME
    const techStack = ['React.js', 'Next.js', 'HTML', 'TailwindCSS', 'Typescript', 'GraphQL', 'ApolloClient']

    return (
        <>
            <Head>
                <title>{getPageTitle("About")}</title>
            </Head>
            <div className='py-3 px-4 max-w-xl mx-auto'>
                <h1 className='text-xl font-bold mb-3 sm:text-3xl text-center uppercase'>{APP_NAME}</h1>
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
                <div className="mt-10">
                    <p className='text-xl mb-3 font-medium basis-full'>Developer Note:</p>
                    <ul className="list-disc ml-4">
                        <li className="mb-2">
                            <span>Hey 👋 My name is <b>`Santosh`</b>. Get to know me more 👉 </span>
                            <a href="https://www.linkedin.com/in/santoshkg/"><LinkedIn></LinkedIn></a>
                        </li>
                        <li className="mb-2"><b>Purpose - </b>The web application is a result of an assignment to test front-end development skills.</li>
                        <li className="mb-2"><b>Source code - </b> <a href="" className="text-sky-500">Github</a> </li>
                        <li className="mb-2"><b>Deployment - </b>Deployed in `Vercel` and `Netlify` platforms. Please read the deployment section in github readme.</li>
                        <li className="mb-2"><b>Note - </b>The web application deployed at `Vercel` will not render the pokemon details due to some limitations in free tier plan.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About