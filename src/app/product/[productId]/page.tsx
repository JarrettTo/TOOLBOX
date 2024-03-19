interface PageProps {
    params: {
        productId: string
    }
}

const Page = ({ params }: PageProps) => {
    return (
        <div>
            <p>Hello World!</p>
        </div>
    );
}

export default Page