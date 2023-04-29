function WasteInfo() {
    return (
        <div id="waste-info">
            <div>
                <h2 className='waste-info-h2'>
                    Why Waste Management?
                </h2>
                <div className="flex"> 
                    <p className="waste-info-text">
                    Proper waste management is crucial for a healthy environment and to fight climate change. It reduces waste in landfills, conserves 
                    natural resources, and lowers greenhouse gas emissions. Small actions, such as recycling and composting, have a significant impact, 
                    and we should be mindful of our waste and adopt environmentally responsible habits. By doing so, we can reduce our carbon footprint 
                    and protect the planet for future generations.
                    </p>
                    <img 
                        src="https://media.istockphoto.com/id/974623708/vector/garbage-recycle-bin-white-background-vector-image.jpg?s=612x612&w=0&k=20&c=IzabUyB6eSWmfReGSeEbMXuyFvKAbwC2eU5AdAOaGJA=" 
                        alt="Picture of personal holding a globe"
                        className="picture" 
                        width="400" 
                        height="400"
                    />
                </div>
                <p>Below is a visual display of climate change and the predicted impact it will have through everyday temperatures.</p>
            </div>
            <div id="map">
                    <iframe src="https://climatechange.codeforafrica.org/map.html#!/center=29.08065831249337%2C31.429953058381955&zoom=1.5&point=36.832800445739764%2C-1.2847089229405242" width="100%" height="600px" ></iframe>
            </div>

        </div>
    )

}

export default WasteInfo;

