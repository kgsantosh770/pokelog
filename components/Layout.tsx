// imports from app
import Navbar from './Navbar'

interface ILayoutProps {
    children: React.ReactElement,
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout