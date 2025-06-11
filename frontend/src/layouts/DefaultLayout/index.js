import Header from "./Header";
import Footer from "./Footer";


function DefaultLayout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex flex-1">
                    <main className="flex-1 p-4 mx-[60px]">
                        {children}
                    </main>
                </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;