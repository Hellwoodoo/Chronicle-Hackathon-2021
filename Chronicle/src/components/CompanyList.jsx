import React from 'react';
import './CompanyList.css';
const CompanyList = ({companyList=[]}) => {
  return (
    <table id="companies">
      <tr>
        <th>Company name</th>
        <th>Total profit</th>
        <th>Total debt</th>
        <th>Total assets</th>
        <th>Total revenue</th>
        <th>Casino</th>
      </tr>
    <>
    { companyList.map((data,index) => {
        if (data) {
          return (
            <tr>
              <td>{data.name}</td>
              <td><figure class="r"><i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>
              <span class="tip_r">Explosive growth</span></figure></td>
              <td><figure class="dh"><img class="diamond_hand" src="/diamond_hand.png" alt="diamond hand"/>
              <span class="tip_dh">Consistent growth</span></figure></td>
              <td><figure class="ra"><img class="red_arrow" src="/red_arrow.png" alt="red arrow"/>
              <span class="tip_ra">Massive loss</span></figure></td>
              <td><figure class="ph"><i class="em em-raised_back_of_hand" aria-role="presentation" aria-label="RAISED BACK OF HAND"></i>
              <span class="tip_ph">Consistent loss</span></figure></td>
              <td></td>
      </tr>	
    	   )	
    	 }
    	 return null
    }) }
    </>
    </table>
  );
}

export default CompanyList