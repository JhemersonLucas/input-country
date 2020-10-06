import styled, {css} from 'styled-components';

export const Container = styled.div`
    padding: 5px 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    border: 1px solid #4995B5;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    max-width: 300px;
    height: 30px;
    position: relative;

    &:hover{        
        box-shadow: 0px 0px 8px;
        border: 2px solid;
        box-shadow: 0px 0px 8px #00AEFF;
        border: 2px solid #A9DEF5;
    }

    ${props => props.focused && css`
        border: 2px solid #A9DEF5;
    `}
`

export const Content = styled.div`
    font-size: 14px;
`;
export const CountryContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-content: center;
    align-items: center;
    padding: 5px 5px;
    cursor: pointer;

    .icon-down {
        margin-left: 10px;
        font-size: 12px;
    }
`;
export const InputContent = styled.div`
    flex: 2;
    display: flex;
    border-left: 1px solid #4995B5;
    margin-left: 5px;

    input {        
        background: transparent;
        font-size: 15px;
        flex: 1;
        border: none;
        color: #fff;
        height: 100%;
        padding: 0px 10px;
        border-color: #282c34;
        outline-width: 0;
        
        ::placeholder {
            color: #4995B5;
        }
    }
`;

export const Input = styled.input`
    background: transparent;
    font-size: 15px;
    flex: 1;
    border: none;
    color: #fff;
    height: 100%;
    padding: 0px 10px;
    border-color: #282c34;
    outline-width: 0;
    
    ::placeholder {
        color: #4995B5;
    }
`; 

export const CountryImg = styled.img`
    width: 25px;
    height: 15px;
`

export const CountryCode = styled.span`
    font-size: 14px;    
    margin-left: 10px;
`

export const ContainerItems = styled.div`
    padding: 5px 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 1px solid #4995B5;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    max-width: 300px;
    position: absolute; 
    top: 40px;
    left: 0px;

    display: ${props => props.open ? 'block' : 'none'};

    &:hover{        
        box-shadow: 0px 0px 8px;
        border: 2px solid;
        box-shadow: 0px 0px 8px #00AEFF;
        border: 2px solid #A9DEF5;
    }

    ${props => props.focused && css`
        border: 2px solid #A9DEF5;
    `}
`

export const SearchContent = styled.div`
    border-bottom: 1px solid #4995B5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;

    svg { 
        color: #4995B5;
    }
`

export const InputSearch = styled.input`
    background: transparent;
    font-size: 15px;
    flex: 1;
    border: none;
    color: #fff;
    height: 100%;
    padding: 0px 10px;
    border-color: #282c34;
    outline-width: 0;
    
    ::placeholder {
        color: #4995B5;
    }
`; 

export const CountrysContent = styled.div`
    padding-right: 10px;
`

export const Item = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px; 
    cursor: pointer;

    ${props => props.selected && css`
        background: #0E7291 0% 0% no-repeat padding-box;
    `}

    &:hover{
        background: #89C3DE 0% 0% no-repeat padding-box;
    }


`
