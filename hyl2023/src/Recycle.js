import React, { useState } from 'react';

function Recycle() {

    const [item, setItem] = useState(null);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  // Add a state to keep track of loading status

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);  // Set loading status to true

        fetch("https://5wrrznk2skxdxthx5mpph3duvy0kldhu.lambda-url.ca-central-1.on.aws/", {
          method: "POST",
          body: JSON.stringify({ item: item }),
        })
          .then((response) => response.json())
          .then((data) => {
            setResponse(data);
            console.log(data);
            setIsLoading(false);  // Set loading status to false
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);  // Set loading status to false
          });
      };
    
    return (
        <>
            <div id="Recycle">

                <div className="recycle-title">
                    <h2>
                        RECYCLING, COMPOST, OR TRASH?
                    </h2>
                    
                </div>

                <form id="recycling-form" onSubmit={handleSubmit}>
                    {/* <img 
                        src="https://img.freepik.com/premium-vector/green-friendly-robot-artificial-intelligence-cartoon-vector-illustration-white-background_223337-4080.jpg?w=2000"
                        alt="Picture of flowers" 
                        width="500"
                        height="500"
                    /> */}
                    <div>
                        <h3>
                            Here lies an AI that can aid in proper disposal...
                        </h3>
                        <input 
                            type="text" 
                            placeholder="Input the name of your item..." 
                            value={item}
                            onChange={(event) => setItem(event.target.value)}
                            required
                        />
                        <button type='submit' className="btn btn-success" disabled={isLoading}>
                            {isLoading ? (
                                <div className="spinner-border text-light" role="status">
                                    <span className="visually-hidden">&nbsp; Loading...</span>
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
            {response && <div id="response">{response}</div>}
        </>
    );
}

export default Recycle;
