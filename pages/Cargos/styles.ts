import styled from "styled-components"
import { FiMoreVertical } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const ContainerDad = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 100px 300px;

    background-color: rgba(240,240,240);
    @media screen and (max-width: 1400px) {
        padding: 35px;
    }
    @media screen and (max-width: 1200px) {
        padding: 5px;
    }
`;

export const ContainerTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    border: 1.5px solid rgba(0,0,0,0.3);

    padding: 20px;
    text-align: start;

    border-radius: 22px 22px 0 0;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const StatusText = styled.h3`
    color: #696969;

    font-size: 0.9em;
    font-weight: bold;
    font-family: 'Monrserrat', sans-serif;

    text-align: center;
`;

export const ToggleSettings = styled.div`
    align-self: center;
`;

export const Icon = styled(FiMoreVertical)`
    font-size: 1.8em;
`;

export const Button = styled.button`
    padding: 20px 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    
    border: none;
    border-bottom: 2px solid transparent;
    
    background-color: transparent;
    
    transition: 0.425s;
    &:hover {
        border-bottom: 2px solid green;
    }
    &:active {
        border-bottom: 1px solid green;
    }
`;

export const ContainerInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    border-bottom: 0.3px solid #d9d9d9;

    padding: 5px;
    
    text-align: center;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const Label = styled.span`
    position: relative;
    
    width: 115px;
    left: 20px;
    top: 12px;

    padding: 2px;

    font-size: 1em;
    font-weight: normal;
    font-family: 'Montserrat', sans-serif;
    
    color: #dddddd;
    background-color: #ffffff;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: start;
    
    padding: 20px 0;
`;

export const InputLabel = styled.div`
    display: grid;
`;

export const Input = styled.input`
    border: 1.8px solid rgba(0,0,0,0.1);
    flex: 1;
    padding: 15px;
    border-radius: 10px;

    /* background-color: rgba(0,0,0,0.1); */

    &::placeholder {
        color: rgba(0,0,0,0.7);
        font-weight: 600;
        font-size: 1.15em;
        font-family: 'Montserrat', sans-serif;
        padding: 25px;
    }

    &:hover {
        border: 1.8px solid green;
    }
`;

export const ContentImage = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Back = styled(AiOutlineArrowLeft)`
    background-color: #d9d9d9;
    border-radius: 33px;
    
    padding: 20px;
    margin-right: 5px;
    
    color: rgba(0,0,0);

    font-size: 1em;
`;

export const ContentDisplayUser = styled.div`
    display: flex;
    flex-direction: row;

    border-radius: 15px;

    margin: 10px;
    align-items: center;
`;

export const ContainerChild = styled.div`
    background-color: #ffffff;
    padding: 50px;
    border-radius: 33px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,.1);

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 3vh;
    grid-row-gap: 3vh;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    padding: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DisplayInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
`;

export const ContentIcon = styled.div`
    padding: 10px;
    border-radius: 33px;
    text-align: center;
    background-color: #d9d9d9;
`;

export const ContainerUser = styled.div`
    padding: 20px;
    border-radius: 33px;
    text-align: center;

    background-color: #d9d9d9;
`;

export const ContentDisplay = styled.div`
    display: flex;
    flex-direction: row;

    border-radius: 15px;

    padding: 20px;
    margin: 10px;
    align-items: center;

    border: 2px solid rgba(0,0,0,0.2);
    background-color: rgba(0,0,0,0.1);
`;

export const DisplayText = styled.div`
    font-size: 1em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    padding: 0 5px;
`;

export const DataContent = styled.div`
    display: grid;

    padding: 20px 20px;
    border-radius: 33px;
    border: 1.6px solid rgba(0,0,0,.3);
`;

export const GridContent = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;

    padding: 20px;
`;

export const StatusBar = styled.div`
    width: 100px;
    text-align: center;
`;

export const Content = styled.div`
    display: grid;
    /* text-align: start; */
    align-items: center;
`;

export const TextUser = styled.div`
`;

export const ContentUser = styled.div`
    display: flex;
    padding: 20px;

    align-items: center;
`;

export const ContentStatus = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    
    padding: 35px 0;
    
    color: rgba(0,0,0,0.7);
`;

interface TextProps {
    status?: "active" | "inactive" | string;
}

export const Text = styled.h4<TextProps>`
    font-size: 1.1em;
    font-weight: normal;
    font-family: 'Monrserrat', sans-serif;

    text-align: start;

    border-radius: 33px;
    color: #696969;
    background-color: ${({ status }) => 
        status === "active" 
        ? 'rgba(0,255,0, 0.1)' 
        : status === "inactive" 
        ? 'rgba(0,0,0,0.1)'
        : 'transparent'
    };

    padding: 5px;
    margin-left: ${({ status }) => status ? 0 : 15}px;
`;

export const TextTable = styled.h4`
    font-size: 0.9em;
    font-weight: bold;
    font-family: 'Monrserrat', sans-serif;

    color: #696969;
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    
    border-radius: 33px;
    border: 2.5px solid transparent;

    transition: 0.425s;
    &:hover {
        border: 2.5px solid green;
    }
`;
