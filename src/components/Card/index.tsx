import React from 'react';

import { CardStyled } from './styles';

interface Props {
    background?: string;
}

const Card: React.FC<Props> = ({ background, children }) => (
    <CardStyled style={{ backgroundColor: background ?? '#fff' }}>
        {children}
    </CardStyled>
)

export default Card;