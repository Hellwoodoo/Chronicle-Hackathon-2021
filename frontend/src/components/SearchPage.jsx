import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import CompanyList from './CompanyList';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [companyListDefault, setCompanyListDefault] = useState();
    const [companyList, setCompanyList] = useState();



    // fetching the initial data first.
    const fetchData = async () => {
        return await fetch('https://localhost:3000/api/table')
            .then(response => response.json())
            .then(data => {
                setCompanyList(data)
                setCompanyListDefault(data)
            });
    }


    const updateInput = async (input) => {
        const filtered = companyListDefault.filter(company => {
            return company.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setCompanyList(filtered);
    }

    useEffect(() => {
        fetchData()
    }, []);


    // prints the page with the search
    return (
        <>
            <SearchBar
                input={input}
                onChange={updateInput}
            />
            <CompanyList companyList={companyList}/>
        </>
    );
}

export default SearchPage