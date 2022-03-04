import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    
    position: relative;
    top: -30px;
    
    align-self: end;
    margin-right: 9%;
`;

export const ContainerChild = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #FFFFFF;
    
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    border-radius: 15px;

    width: 240px;
`;

export const Content = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;

    padding: 10px 25px;
    
    text-align: start;
`;

export const Title = styled.h1`
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    color: rgba(0,0,0,0.8);
    margin-left: 10px;
`;