import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import { v4 as uuidv4 } from "uuid";

function Survey() {
    const [answers, setAnswers] = useState({}) // users answers are here in json format of {question number: answer}
    const [foodWaste, setFoodWaste] = useState("")
    const [select8, setSelect8] = useState()
    const [select10, setSelect10] = useState()
    let [pageNum,setPageNum] = useState(0)
    const jsonStore = (answer) => {
        if(!(answer in answers))
            setAnswers({ ...answers, ...answer }) 
    }
    console.log(answers)
    console.log(pageNum)

    const handlePageChange = (e) => {
        e.preventDefault()

        setPageNum(pageNum+1)
    }

    const generate = async(answers) => { 
        console.log("asdf")
        let temp_id = uuidv4()
        const res = await fetch ("https://jc43jylvi73olagacvrdizwgxm0rzqjm.lambda-url.ca-central-1.on.aws/",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "id": temp_id,
            },
                body: JSON.stringify(answers)
            });
        const jsonRes = await res.json();
        console.log(jsonRes);
        if (res.status == 200)
        {
            console.log("Post successful");
        }
        else {
            console.log("Error. Did not return status code 200.");
        }
        const res2 = await fetch ("https://tye5uzke72oc2auxh6bqe35aj40etqji.lambda-url.ca-central-1.on.aws/",
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "id": temp_id,
        },
            body: JSON.stringify(answers)
        });
    const noriRes = await res.json();
    console.log(noriRes);

    if (res.status == 200 && res2.status == 200)
    {
        console.log("Post successful");
    }
    else {
        console.log("Error. Did not return status code 200.");
    }
    }
    return (
        <form id='survey'>
            <div className={pageNum == 0?'q1':"hidden"}>
                <span>1. How often do you use public transportation to commute to your university?</span>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q1Radios" value="Every Day" id="defaultRadio1a" onClick={(e) => jsonStore({ q1: e.target.value })} required/>
                        <label className="form-check-label" htmlFor="defaultRadio1a">
                            a. Every Day
                        </label>
                    </div>
                
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q1Radios" value="3-4 times a week" id="defaultRadio1b" onClick={(e) => jsonStore({ q1: e.target.value })} required/>
                        <label className="form-check-label" htmlFor="defaultRadio1b">
                            b. 3-4 times a week
                        </label>
                    </div>
                
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q1Radios" value="Rarely" id="defaultRadio1c" onClick={(e) => jsonStore({ q1: e.target.value })} required/>
                        <label className="form-check-label" htmlFor="defaultRadio1c">
                            c. Rarely
                        </label>
                    </div>
                
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q1Radios" value="Never" id="defaultRadio1d" onClick={(e) => jsonStore({ q1: e.target.value })} required/>
                        <label className="form-check-label" htmlFor="defaultRadio1d">
                            d. Never
                        </label>
                    </div>
            </div>
            <div className={pageNum == 0 ?'q2':"hidden"}>
                <span>2. How often do you recycle paper, plastic, and glass?</span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2Radios" value="Every Day" id="defaultRadio2a" onClick={(e) => jsonStore({ q2: e.target.value })} required />
                    <label className="form-check-label" htmlFor="defaultRadio2a">
                        a. Every Day
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2Radios" value="A few times a week" id="defaultRadio2b" onClick={(e) => jsonStore({ q2: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio2b">
                        b. A few times a week
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2Radios" value="Rarely" id="defaultRadio2c" onClick={(e) => jsonStore({ q2: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio2c">
                        c. Rarely
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q2Radios" value="Never" id="defaultRadio2d" onClick={(e) => jsonStore({ q2: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio2d">
                        d. Never
                    </label>
                </div>
            </div>

            <div className={pageNum == 1?'q3':"hidden"}>
                <span>3. How often do you turn off lights and electronics when they are not in use?</span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q3Radios" value="Every Day" id="defaultRadio3a" onClick={(e) => jsonStore({ q3: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio3a">
                        a. Every Day
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q3Radios" value="A few times a week" id="defaultRadio3b" onClick={(e) => jsonStore({ q3: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio3b">
                        b. A few times a week
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q3Radios" value="Rarely" id="defaultRadio3c" onClick={(e) => jsonStore({ q3: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio3c">
                        c. Rarely
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q3Radios" value="Never" id="defaultRadio3d" onClick={(e) => jsonStore({ q3: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio3d">
                        d. Never
                    </label>
                </div>
            </div>
            <div className={pageNum == 1?'q4':"hidden"}>
                <span>4. Have you ever participated in a community cleanup or other environmental activity?</span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q4Radios" value="Yes" id="defaultRadio4a" onClick={(e) => jsonStore({ q4: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio4a">
                        a. Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q4Radios" value="No" id="defaultRadio4b" onClick={(e) => jsonStore({ q4: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio4b">
                        b. No
                    </label>
                </div>
            </div>
            <div className={pageNum == 2?'q5':"hidden"}>
                <span>5. Have you ever participated in a clothing swap or donated clothes to a thrift store to reduce textile waste?</span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q5Radios" value="Yes" id="defaultRadio5a" onClick={(e) => jsonStore({ q5: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio5a">
                        a. Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q5Radios" value="No" id="defaultRadio5b" onClick={(e) => jsonStore({ q5: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio5b">
                        b. No
                    </label>
                </div>
            </div>
            <div className={pageNum == 2?'q6':"hidden"}>
                <span>6. On average, how many pounds of food do you waste per week?</span>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Amount of Food Wasted(pounds)" value = {foodWaste}  onChange={(e) => { setFoodWaste(e.target.value); jsonStore({ q6: e.target.value })}} reqiured/>
                </div>
            </div>
            <div className={pageNum == 3?'q7':"hidden"}>
                <span>7. Do you print double-sided or use digital resources instead of printing to reduce paper waste?</span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q7Radios" value="Yes" id="defaultRadio7a" onClick={(e) => jsonStore({ q7: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio7a">
                        a. Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q7Radios" value="No" id="defaultRadio7b" onClick={(e) => jsonStore({ q7: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio7b">
                        b. No
                    </label>
                </div>
            </div>
            <div className={pageNum == 3?'q8':"hidden"}>
                <span>8. On average, how many times per week do you use reusable bags, containers, or utensils to reduce waste?</span>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                        {/* <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label> */}
                        <select class="custom-select" value={select8} onChange={(e) => { setSelect8(e.target.value); jsonStore({ q8: e.target.value })}} >
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="2">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                            <option value="4">7</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={pageNum == 4?'q9':"hidden"}>
                <span>9. How much do you care about buying products with minimal/recyclable packaging? </span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q9Radios" value="Every Day" id="defaultRadio9a" onClick={(e) => jsonStore({ q9: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio9a">
                        a. A lot 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q9Radios" value="A few times a week" id="defaultRadio9b" onClick={(e) => jsonStore({ q9: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio9b">
                        b. Somewhat
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q9Radios" value="Rarely" id="defaultRadio9c" onClick={(e) => jsonStore({ q9: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio9c">
                        c. A little
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="q9Radios" value="Never" id="defaultRadio9d" onClick={(e) => jsonStore({ q9: e.target.value })} required/>
                    <label className="form-check-label" htmlFor="defaultRadio9d">
                        d. Not at all
                    </label>
                </div>
            </div>
            <div className={pageNum == 4?'q10':"hidden"}>
                <span>10. How confident are you in your ability to properly dispose of hazardous waste (such as batteries, electronics, or chemicals)? (Answer on a scale of 1 to 5, with 1 being not confident at all and 5 being extremely confident)?</span>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                        {/* <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label> */}
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" value={select10} onChange={(e) => { setSelect10(e.target.value); jsonStore({ q10: e.target.value })}} required>
                            <option selected>Choose...</option>
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="4">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={pageNum == 5?'feedback':"hidden"}>
                this is a feedback page
            </div>
            <button type="submit" class={pageNum !== 4 && pageNum !== 5?'btn btn-primary':"hidden"} onClick={(event) => handlePageChange(event)}>Next</button> 
            <button type="submit" class={pageNum == 4?'btn btn-primary':"hidden"} onClick={(event) => { 
            event.preventDefault(); 
            generate(answers); 
            }}>Submit</button>        
        </form>
   
        
    )
}

export default Survey;
