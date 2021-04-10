import React from 'react';
import './CompanyList.css';

const CompanyList = ({companyList = []}) => {
    return (
        <table id="companies">
            <tr>
                <th>Stock Ticker</th>
                <th>Short-term rockets: 2 months</th>
                <th>Consistent performance: 1 year</th>
                <th>Total debt</th>
                <th>Total assets</th>
                <th>Total revenue</th>
                <th>Casino</th>
            </tr>
            <>
                {companyList.map((data, index) => {
                    if (data) {
                        return (
                            <tr>
                                <td>{data.name}</td>
                                <td>{[...Array(data.rocket_count)].map(() =>
                                    (<i className="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>))
                                    }</td>
                                <td>{[...Array(data.hand_count)].map(() =>
                                    (<img class="symbol_img" src="/diamond_hand.png" alt="diamond hand"/>))
                                    }</td>
                                <td><img class="symbol_img" src="/red_arrow.png" alt="red arrow"/></td>
                                <td></td>
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