import styled from 'styled-components';

export const CloseButton = styled.button`
&:before {
    content: "x";
    font-size: 18px;
    line-height: 36px;
    color:#4a4a4a;
}
    position: absolute;
    top: 6px;
    right: 6px;
    text-align: center;
    transition: opacity .2s;
    width: 36px;
    height: 36px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    background: #fff;
    padding: 0;
`;

export const GuestsWrapper = styled.div`
    background-color: lightblue;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    padding: 32px 16px 16px;
    font-size: 14px;
    min-width: 288px;
    min-heigth: 342px;
    position: absolute;
    z-index: 25;
    top: 50px;
    left:435px;
    max-height: auto;
`;

export const GuestsInnerLine = styled.div`
    display: block;
    margin-top: 10px;
    min-height:38px;
`;

export const GuestsInnerLineConfig = styled.div`
    width: 130px;
    float: right;
    display: flex;
    height: 36px;
    line-height: 36px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
`;

export const GuestsInnerLineConfigButton = styled.button`
    background-color: #fff;
    cursor: default;
    min-width: 36px;
    min-height: 36px;
`;

export const GuestsInnerLineConfigButtonSpan = styled.span`
    color: #767676;
    background-color: #fff;
    cursor: default;
`;

export const GuestsInnerLineConfigField = styled.span`
    flex: 1 1 auto;
    display: inline-block;
    vertical-align: top;
    font-size: 1em;
    box-shadow: inset 0 3px 3px -3px rgba(0,0,0,.25);
`;

export const GuestsInnerLineLabel = styled.div`
    display: block;
    font-size: 1em;
    font-weight: 700;
    padding-right: 16px;
    line-height: 36px;
`;

export const GuestsInnerLineLabelIcon = styled.div`
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    font-size: 20px;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    speak: none;
    color:#2C2C2C;
    padding: 0px 16px 0px 0px;
`;

export const UpdateButtonDiv = styled.div`
    display: block;
    margin-top: 16px;
    font-size: 14px
`;

export const UpdateButton = styled.button`
    background-color: #000;
    border-color: #000;
    border-radius: 3px;
    width: 256px;
    height: 35px;
    color:#fff;
`;
