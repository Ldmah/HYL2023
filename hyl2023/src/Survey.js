import React, { useState } from 'react';
import Navbar from './Navbar';

function Survey() {

    return (
        <div id='survey'>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
                <label className="form-check-label" htmlFor="defaultCheck2">
                Disabled checkbox
                </label>
            </div>
        </div>
    )
}

export default Survey;
