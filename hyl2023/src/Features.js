

function Features() {

    return (
        <div id="features">
            <h1>Features</h1>
            <div className="p-layout">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">AI Disposal Guide</h5>
                            <p className="card-text">
                                This functionality uses OpenAI to quickly and easily provide instructions regarding waste disposal for a material or item.
                            </p>
                            <a href="/Recycle.js" className="btn btn-primary">See More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Informative Survey</h5>
                            <div>
                                <p className="card-text">
                                The quick survey is designed to help you gain insights into your waste management habits and identify areas where you can make improvements. 
                                The survey might ask questions about the type of waste you produce, how you dispose of it, and your recycling habits.
                                </p>
                                <a href="/Survey.js" className="btn btn-primary">See More</a>
                            </div>
                        </div>  
                    </div> 
            </div>
        </div>
    )
}

export default Features;