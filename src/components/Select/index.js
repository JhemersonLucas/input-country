import React from 'react';
import {Container, ContainerItems, CountryContent, InputContent, Input, CountryImg, CountryCode, SearchContent, InputSearch, CountrysContent, Item} from './styles';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import InputMask from "react-input-mask";

const images = {
    br: 'https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-0-cke.jpg',
    us: 'https://maestrovirtuale.com/wp-content/uploads/2019/10/bandera-eeuu.png'
}

const Select = () => {

    const [focused, setFocused] = React.useState(false);
    const [openDrop, setOpenDrop] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    
    const [countryList, setCountryList] = React.useState([
        {id: 'br', name: 'Brazil', code: '+55', mask: '(99) 9 9999-9999'}, 
        {id: 'us', name: 'United States', code: '+1', mask: '(999) 999-9999'}
    ]);
    
    const [country, setCountry] = React.useState({});

    const handleChooseCountry = data => {
        setCountry(data);
        setOpenDrop(false);
    }

    function beforeMaskedStateChange({ nextState }) {
      let { value } = nextState;
      console.log("value", value)      
    }

    return (
        <>
            <Container focused={focused}>
                <CountryContent onClick={()=>setOpenDrop(true)}>
                    <CountryImg src={images[country.id]} />
                    <CountryCode>{country.code}</CountryCode>
                    <BsFillCaretDownFill className="icon-down"/>
                </CountryContent>
                <InputContent>
                    <InputMask mask={country.mask} onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} />
                    {/* <Input placeholder="123..."  /> */}
                </InputContent>
                     
                <ContainerItems open={openDrop}>
                    <SearchContent>
                        <AiOutlineSearch />
                        <InputSearch onChange={str => setSearch(str.target.value)} />
                    </SearchContent>
                    <CountrysContent>
                        {countryList.filter(_country => _country.name.indexOf(search) >= 0).map(_country => (
                            <Item key={_country.id} selected={country.id == _country.id} onClick={()=>handleChooseCountry(_country)}>
                                <CountryImg src={images[_country.id]} />
                                <CountryCode>{_country.name}</CountryCode>
                            </Item>
                        ))}
                    </CountrysContent>
                </ContainerItems>
            </Container>   
            </>
    )
}

export default Select