import styled from "styled-components"
const variant_button = {
    blue: {
        padding: "0.5rem 1rem",
        background: "#3385FF",
        color: "#fff",
        border: "1px solid transparent",
        outline: "1px solid transparent",
        borderRadius: "8px",
        fontSize: "18px",
        transtition: "0.3s ease all",
        hover: {
            background: "#fff",
            color: "#3385FF",
            border: "1px solid #3385FF"
        },
    },
    default: {
        padding: "0.5rem 1rem",
        background: "#3385FF",
        color: "#fff",
        border: "1px solid transparent",
        outline: "1px solid transparent",
        borderRadius: "8px",
        fontSize: "18px"
    }
}
export const StyledButtons = styled.button` 
    padding: ${((params) => variant_button[params.variant].padding)};
    background: ${((params) => variant_button[params.variant].background)};
    color: ${(params) => variant_button[params.variant].color};
    border: ${((params) => variant_button[params.variant].border)};
    outline: ${((params) => variant_button[params.variant].outline)};
    border-radius: ${((params) => variant_button[params.variant].borderRadius)};
    font-size: ${((params) => variant_button[params.variant].fontSize)};
    letter-spacing: 1px;
    transition: ${((params) => variant_button[params.variant].transtition)};
    &:hover{
        background: ${(params) => variant_button[params.variant].hover.background };
        color: ${(params) => variant_button[params.variant].hover.color};
        border: ${(params) => variant_button[params.variant].hover.border}
    }
`
export const SubmitterButtons = styled.button.attrs({
    type: "submit"
})`
    padding: ${((params) => variant_button[params.variant].padding)};
    background: ${((params) => variant_button[params.variant].background)};
    color: ${(params) => variant_button[params.variant].color};
    border: ${((params) => variant_button[params.variant].border)};
    outline: ${((params) => variant_button[params.variant].outline)};
    border-radius: ${((params) => variant_button[params.variant].borderRadius)};
    font-size: ${((params) => variant_button[params.variant].fontSize)};
    letter-spacing: 1px;
    transition: ${((params) => variant_button[params.variant].transtition)};
    &:hover{
        background: ${(params) => variant_button[params.variant].hover.background };
        color: ${(params) => variant_button[params.variant].hover.color};
        border: ${(params) => variant_button[params.variant].hover.border}
    }
`