import MainHeader from "./MainHeader.jsx";

export default function Layout({ children }) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
        </>
    );
}
