import React, { useState, useRef } from 'react';
import Navbar from './Navbar';

function Survey() {
    const [answers, setAnswers] = useState({}) // users answers are here in json format of {question number: answer}
    const [foodWaste, setFoodWaste] = useState("")
    const [select8, setSelect8] = useState()
    const [select10, setSelect10] = useState()
    const jsonStore = (answer) => {
        if(!(answer in answers))
            setAnswers({ ...answers, ...answer }) 
    }
    console.log(answers)
    return (
        <div id='survey'>
            <div className='q1'>
                <span>1.How often do you use a refillable water bottle instead of single-use plastic water bottles?</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck1a" onClick={(e) => jsonStore({ q1: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck1a">
                        a. Every Day
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.75" id="defaultCheck1b" onClick={(e) => jsonStore({ q1: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck1b">
                        b. A few times a week
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.5" id="defaultCheck1c" onClick={(e) => jsonStore({ q1: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck1c">
                        c. Rarely
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck1d" onClick={(e) => jsonStore({ q1: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck1d">
                        d. Never
                    </label>
                </div>
            </div>
            <div className='q2'>
                <span>2. How often do you recycle paper, plastic, and glass?</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck2a" onClick={(e) => jsonStore({ q2: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck2a">
                        a. Every Day
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.75" id="defaultCheck2b" onClick={(e) => jsonStore({ q2: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck2b">
                        b. A few times a week
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.5" id="defaultCheck2c" onClick={(e) => jsonStore({ q2: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck2c">
                        c. Rarely
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck2d" onClick={(e) => jsonStore({ q2: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck2d">
                        d. Never
                    </label>
                </div>
            </div>

            <div className='q3'>
                <span>3. How often do you turn off lights and electronics when they are not in use?</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck3a" onClick={(e) => jsonStore({ q3: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck3a">
                        a. Every Day
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.75" id="defaultCheck3b" onClick={(e) => jsonStore({ q3: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck3b">
                        b. A few times a week
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.5" id="defaultCheck3c" onClick={(e) => jsonStore({ q3: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck3c">
                        c. Rarely
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck3d" onClick={(e) => jsonStore({ q3: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck3d">
                        d. Never
                    </label>
                </div>
            </div>
            <div className='q4'>
                <span>4. Have you ever participated in a community cleanup or other environmental activity?</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck4a" onClick={(e) => jsonStore({ q4: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck4a">
                        a. Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck4b" onClick={(e) => jsonStore({ q4: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck4b">
                        b. No
                    </label>
                </div>
            </div>
            <div className='q5'>
                <span>5. Have you ever participated in a clothing swap or donated clothes to a thrift store to reduce textile waste?</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck5a" onClick={(e) => jsonStore({ q5: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck5a">
                        a. Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck5b" onClick={(e) => jsonStore({ q5: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck5b">
                        b. No
                    </label>
                </div>
            </div>
            <div className='q6'>
                <span>6. On average, how many pounds of food do you waste per week?</span>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Amount of Food Wasted(pounds)" value = {foodWaste}  onChange={(e) => { setFoodWaste(e.target.value); jsonStore({ q6: e.target.value })}}/>
                </div>
            </div>
            <div className='q7'>
                <span>7. Do you print double-sided or use digital resources instead of printing to reduce paper waste?</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck7a" onClick={(e) => jsonStore({ q7: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck7a">
                        a. Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck7b" onClick={(e) => jsonStore({ q7: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck7b">
                        b. No
                    </label>
                </div>
            </div>
            <div className='q8'>
                <span>8. On average, how many times per week do you use reusable bags, containers, or utensils to reduce waste?</span>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                        {/* <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label> */}
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" value={select8} onChange={(e) => { setSelect8(e.target.value); jsonStore({ q8: e.target.value })}}>
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='q9'>
                <span>9. How much do you care about buying products with minimal/recyclable packaging? </span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="defaultCheck9a" onClick={(e) => jsonStore({ q9: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck9a">
                        a. A lot 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.75" id="defaultCheck9b" onClick={(e) => jsonStore({ q9: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck9b">
                        b. Somewhat
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.5" id="defaultCheck9c" onClick={(e) => jsonStore({ q9: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck9c">
                        c. A little
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="0.25" id="defaultCheck9d" onClick={(e) => jsonStore({ q9: e.target.value })} />
                    <label className="form-check-label" htmlFor="defaultCheck9d">
                        d. Not at all
                    </label>
                </div>
            </div>
            <div className='q10'>
                <span>10. How confident are you in your ability to properly dispose of hazardous waste (such as batteries, electronics, or chemicals)? (Answer on a scale of 1 to 5, with 1 being not confident at all and 5 being extremely confident)?</span>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                        {/* <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label> */}
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" value={select10} onChange={(e) => { setSelect10(e.target.value); jsonStore({ q10: e.target.value })}}>
                            <option selected>Choose...</option>
                            <option value="0">1</option>
                            <option value="0.25">2</option>
                            <option value="0.5">3</option>
                            <option value="0.75">4</option>
                            <option value="1">5</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Survey;
