import React, { useState } from 'react'
import Collapsible from 'react-native-collapsible';
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import Card from "../../../components/Card";
import { useAuth } from '../../../contexts/auth';
import ScoreColors from "../ScoreColors.json";
import {
    ScoreText,
    ScoreDescription,
    Separator,
    SeeMore,
    SeeMoreText,
    ScoreTemplateText,
    ScoreTemplateItem,
    Gradient
} from "./styles";

const Dashboard: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const { user } = useAuth();

    let colors;
    if (user) {
        if (user.score < 30)
            colors = ScoreColors.find(c => c.step === 30);
        else if (user.score < 60)
            colors = ScoreColors.find(c => c.step === 60);
        else
            colors = ScoreColors.find(c => c.step === 100);
    }

    return (
        <Card>
            <ScoreText>{user?.score}</ScoreText>
            <ScoreDescription>Sua pontuação é {colors?.description}</ScoreDescription>
            <Separator />
            <SeeMore onPress={() => setIsCollapsed(!isCollapsed)}>
                <SeeMoreText>Saiba mais</SeeMoreText>
                <Icon name={isCollapsed ? "chevron-down" : "chevron-up"} size={16} color="#6a1e55" />
            </SeeMore>
            <Collapsible style={{ flexDirection: "row" }} collapsed={isCollapsed}>
                <ScoreTemplateItem>
                    <ScoreTemplateText>0 a 30</ScoreTemplateText>
                    <Gradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={ScoreColors[0].colors.gradient as React.ReactText[]} />
                </ScoreTemplateItem>
                <ScoreTemplateItem>
                    <ScoreTemplateText>31 a 60</ScoreTemplateText>
                    <Gradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} colors={ScoreColors[1].colors.gradient as React.ReactText[]} />
                </ScoreTemplateItem>
                <ScoreTemplateItem>
                    <ScoreTemplateText>61 a 100</ScoreTemplateText>
                    <Gradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} colors={ScoreColors[2].colors.gradient as React.ReactText[]} />
                </ScoreTemplateItem>
            </Collapsible>
        </Card>
    )
};

export default Dashboard;