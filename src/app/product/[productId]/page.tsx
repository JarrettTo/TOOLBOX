interface PageProps {
    params: {
        productId: string
    }
}

const Page = ({ params }: PageProps) => {
    return (
        <div className="main pt-10">
            <div className="left">
                 {/* Product Display */}
                <div className="product-display container bg-[#E9E8E8] rounded-2xl px-10 py-10">
                    <div className="side-pictures">
                        <div className="side-pic selected">
                            <img className="product" src="https://www.bosch-professional.com/sa/en/ocsmedia/7767-54/application-image/720x410/drill-gbm-6-re-06014726p0.png"/>
                        </div>

                        <div className="side-pic">
                            <img className="product" src="https://www.bosch-professional.com/sa/en/ocsmedia/7767-54/application-image/720x410/drill-gbm-6-re-06014726p0.png"/>
                        </div>
                    </div>
                    <div className="main-picture">
                        <img className="product-main" src="https://www.bosch-professional.com/sa/en/ocsmedia/7767-54/application-image/720x410/drill-gbm-6-re-06014726p0.png"/>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="container bg-[#E9E8E8] rounded-2xl px-10 py-2">
                    {/* Product Description */}
                    <p className="ranking">#1 in Power Tools</p>
                    <hr></hr>
                    <p className="product-name">Power Drill</p>

                    <div className="sale-tag">
                        <p>Save ₱500</p>
                    </div>

                    <p className="brand-name">BOSCH</p>
                </div>
            </div>
        </div>
        
    );
}

export default Page