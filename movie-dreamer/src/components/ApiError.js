import React from 'react';
import styled from 'styled-components';

const Erroring = styled.div`
    text-align: center;
    color: red;
    margin: 3em 0.5em 3em 0.5em;
`;

export const ApiError = () => {
    return (
        <Erroring>
            <h3>An error has occurred. Please contact customer service.</h3>
        </Erroring>
    );
}

