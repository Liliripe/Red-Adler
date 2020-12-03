import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'

export const StyledCol = styled(Col)`
    padding: 5vh 6vw;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        padding: 1vh 2vw;
    }
`
export const StyledLink = styled.div`
    position: relative;
    display: block;
    cursor: pointer;
`
export const Title = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${props => props.theme.fontSize.medium};
    padding: 0 2vw;
    opacity: 0;
    transition: opacity 1.2s cubic-bezier(0.2, 0, 0.175, 1) 0s;

    :hover {
        opacity: 1;
    }
`
export const StyledModal = styled(Modal)`
    display: flex !important;
    align-items: center !important;
    
    .modal-content {
        border-radius: 0;
        width: 50vw;
        left: -10vw;
        background-color: ${props => props.theme.colors.smoke};

        @media screen and (max-width: ${props => props.theme.responsive.large}) {
            width: 90vw;
            left: -15vw;
        }
        @media screen and (max-width: ${props => props.theme.responsive.medium}) {
            width: auto;
            left: auto;
        }
    }
    .modal-body {
        padding-top: 0;
        padding-bottom: 0;
    }
`
