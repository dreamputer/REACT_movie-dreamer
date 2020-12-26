import React from 'react';
import styled from 'styled-components';

const Footing = styled.div`
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
    hr {
        width: 90%;
    }

`;

export const Footer = () => {
    return (
        <Footing>
            <hr/>
            <span>
                <small>&copy; Copyright {(new Date()).getFullYear()}, Dreamputer Corporation.</small>
            </span>
        </Footing>
    );
}

