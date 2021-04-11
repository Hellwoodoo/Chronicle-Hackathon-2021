import React from 'react';
import './CompanyList.css';

const CompanyList = ({companyList = []}) => {
    return (
        <table id="companies">
            <tr>
                <th>Stock Ticker</th>
                <th>Short-term rockets: 2 months</th>
                <th>Consistent performance: 1 year</th>
                <th>Percentage short float</th>
            </tr>
            <>
                {companyList.map((data, index) => {
                    if (data) {
                        let hand_icon;
                        if (data.hand_type >= 0) {
                            hand_icon = <img className="symbol_img" src="/diamond_hand.png" alt="diamond hand"/>
                        } else {
                            hand_icon = <img className="symbol_img" src="/paper_hand.png" alt="paper hand"/>
                        }

                        let rocket_icon;
                        if (data.rocket_type >= 0) {
                            rocket_icon = <i className="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>
                        } else {
                            rocket_icon = <img className="symbol_img" src="/comet_crash.png" alt="super paper comet hand"/>
                        }

                        let short_float;
                        if (data.shortPercentOfFloat < 0) {
                            short_float = "no short data"

                        } else {
                            short_float = String(data.shortPercentOfFloat) + "% !!"
                        }



                        return (
                            <tr>
                                <td>{data.name}</td>
                                <td>{[...Array(data.rocket_count)].map(() =>
                                    (rocket_icon))
                                    }</td>
                                <td>{[...Array(data.hand_count)].map(() =>
                                    (hand_icon))
                                    }</td>
                                <td>{short_float}</td>
                                <td></td>
                                <td></td>


                            </tr>
                        )
                    }
                    return null
                })}
            </>
        </table>
    );
}

export default CompanyList