import React from 'react';
import ScoreCard from '../../src/pages/Dashboard/ScoreCard';
import renderer from 'react-test-renderer';

describe('ScoreCard should render correctly', () => {
    it('match snapshot', () => {
        const scorecard = renderer
            .create(<ScoreCard />)
            .toJSON();
        expect(scorecard).toMatchSnapshot();
    });
})