import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
const userDesc = document.getElementById('userDesc');
const compDesc = document.getElementById('compDesc');

customMap.addMarker(user);
customMap.addMarker(company);

userDesc.innerHTML = `
    <div style="font-size:1.5rem; margin-left:10rem;text-align:left;">
        <strong>${user.name}</strong> <br>
        Item: ${user.product}
    </div>
`;
compDesc.innerHTML = `
    <div style="font-size:1.5rem; margin-right:10rem;text-align:right;">
        <strong>${company.companyName}</strong> <br>
        ${company.catchPhrase}
    </div>
`;