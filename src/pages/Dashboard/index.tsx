import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import IDebt from "../../interfaces/IDebt"
import IProposal from "../../interfaces/IProposal"
import IProtection from "../../interfaces/IProtection"
import { load as loadDebts } from "../../ducks/debts";
import { load as loadProposals } from "../../ducks/proposals";
import { load as loadProtections } from "../../ducks/protections";
import CardDetail from "../../components/CardDetail";
import AvatarSkeleton from "../../components/AvatarSkeleton"
import ScoreCard from "./ScoreCard";
import { useAuth } from '../../contexts/auth';
import ScoreColors from "./ScoreColors.json";
import ProposalCard from "./ProposalCard";
import ProtectionCard from "./ProtectionCard";

import {
    Container,
    Content,
    Gradient,
    CircularProgress,
    Name,
    Avatar
} from './styles'

interface Props {
    navigation?: any;
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
    const [avatarLoading, setAvatarLoading] = useState(true);
    const { user, signOut } = useAuth();
    const dispatch = useDispatch();
    const debts: IDebt[] = useSelector((state: any) => state.debt.debts)
    const proposals: IProposal[] = useSelector((state: any) => state.proposal.proposals)
    const protections: IProtection[] = useSelector((state: any) => state.protection.protections)

    let colors;
    if (user) {
        if (user.score < 30)
            colors = ScoreColors.find(c => c.step === 30);
        else if (user.score < 60)
            colors = ScoreColors.find(c => c.step === 60);
        else
            colors = ScoreColors.find(c => c.step === 100);
    }

    const handleSignOut = () => {
        signOut();
    }

    useEffect(() => {
        dispatch(loadDebts(user?.id, user?.score, debts.length))
        dispatch(loadProposals(user?.id, user?.score ?? 0))
        dispatch(loadProtections(user?.id, user?.score ?? 0))
    }, [])

    return (
        <Container style={{ backgroundColor: colors?.colors.gradient[0] }} forceInset={{ bottom: 'never' }}>
            <Content contentContainerStyle={{ alignItems: "center" }}>
                <Gradient colors={colors?.colors.gradient as React.ReactText[]} />
                <CircularProgress
                    size={200}
                    width={5}
                    fill={user?.score}
                    rotation={0}
                    tintColor={colors?.colors.progress}
                    backgroundColor="#fff">
                    {
                        () => (
                            <>
                                {avatarLoading && <AvatarSkeleton />}
                                <Avatar onLoad={() => { setAvatarLoading(false) }}
                                    source={
                                        user?.avatar ?
                                            { uri: user?.avatar } :
                                            require("../../assets/profile.png")
                                    }
                                />
                            </>
                        )
                    }
                </CircularProgress>
                <Name>{user?.firstname}</Name>
                <ScoreCard />
                {debts.length > 0 &&
                    <CardDetail
                        icon="file-text-o"
                        color="#d4855a"
                        title="Negocie suas dívidas"
                        description="Você possui uma pendência com"
                        image={debts[0].companylogo}
                        sub={debts[0].fullvalue}
                        subLineThrough={true}
                        imageDescription={`por ${debts[0].newvalue}`}
                        bottom="Negociar agora"
                        onPress={() => navigation.navigate("Pendências")} />
                }
                {proposals.length > 0 && proposals.map(p =>
                    <ProposalCard key={p.id} proposal={p} />
                )}
                {protections.length > 0 && protections.map(p =>
                    <ProtectionCard key={p.id} protection={p} />
                )}
            </Content>
        </Container>
    )
};

export default Dashboard;