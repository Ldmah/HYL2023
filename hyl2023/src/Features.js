function Features() {
    return (
        <div id="features">
            <h1>Features</h1>
            <div className="p-layout">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">AI Disposal Guide</h5>
                            <p class="card-text">
                                This functionality uses OpenAI to quickly and easily provide instructions regarding waste disposal for a material or item.
                            </p>
                            <a href="#" class="btn btn-primary">See More</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Informative Survey</h5>
                            <div>
                                <p class="card-text">
                                The quick survey is designed to help you gain insights into your waste management habits and identify areas where you can make improvements. 
                                The survey might ask questions about the type of waste you produce, how you dispose of it, and your recycling habits.
                                </p>
                                <a href="#" class="btn btn-primary">See More</a>
                            </div>
                        </div>  
                    </div> 
            </div>
        </div>
    )
}

export default Features;