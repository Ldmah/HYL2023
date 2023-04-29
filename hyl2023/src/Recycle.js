
import React, { useState } from 'react';

function Recycle() {

    const [item, setItem] = useState(null);
    
    return (
        <>
            <div id="Recycle">

                <div className="recycle-title">
                    <h2>
                        RECYCLING OR TRASH?
                    </h2>
                    
                </div>

                <form id="recycling-form">
                    <img 
                        src="https://img.freepik.com/premium-vector/green-friendly-robot-artificial-intelligence-cartoon-vector-illustration-white-background_223337-4080.jpg?w=2000"
                        alt="Picture of flowers" 
                        width="500"
                        height="500"
                    />
                    <div>
                        <h3>
                            Here lies an eco friendly AI that can aid in sorting your garbage
                        </h3>
                        <input 
                            type="text" 
                            placeholder="Input the name of your item..." 
                            value={item}
                            onChange={(event) => setItem(event.target.value)}
                            required
                        />
                        <button type='submit' className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Recycle;