import Navbar from "@/components/Navbar"

export default async function Layout({
                                         children,
                                         params: {productId},
                                     }: {
    children: React.ReactNode;
    params: { productId: string };
                                     }) {
    return (
        <div className="container max-w-7xl mx-auto h-full pt-12">
            <Navbar/>

            <div className="">
                {children}
            </div>
        </div>


    );
}