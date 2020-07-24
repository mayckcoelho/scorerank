import React, { useState } from 'react';
import {
    FlatList,
    ListRenderItem,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import { load, pay } from "../../ducks/debts";
import { useAuth } from '../../contexts/auth';
import Modal from '../../components/Modal';
import IDebt from "../../interfaces/IDebt"
import {
    Container,
    Content,
    CardView,
    ImageContent,
    SubText,
    Description,
    Separator,
    DebtPriceView
} from './styles';

const DebtList: React.FC = () => {
    const [selectedDebt, setSelectedDebt] = useState<IDebt | null>(null)
    const [visible, setVisible] = useState(false)
    const { user, updateScore } = useAuth();

    const dispatch = useDispatch();
    const debts: IDebt[] = useSelector((state: any) => state.debt.debts)

    const _renderItem: ListRenderItem<IDebt> = ({ item }) => (
        <CardView onPress={() => { setVisible(true); setSelectedDebt(item); }}>
            <ImageContent source={{ uri: item.companylogo }} resizeMode="contain" />
            <DebtPriceView>
                <View style={{ marginRight: 15 }}>
                    <SubText>{item.fullvalue}</SubText>
                    <Description>{item.newvalue}</Description>
                </View>
                <Icon name="arrow-right" size={20} color="#757575" />
            </DebtPriceView>
        </CardView>
    )

    return (
        <Container forceInset={{ bottom: 'never' }}>
            <Content>
                <FlatList
                    data={debts}
                    renderItem={_renderItem}
                    keyExtractor={item => item.id}
                    onEndReached={() => dispatch(load(user?.id, user?.score, debts.length))}
                    ItemSeparatorComponent={() => <Separator />}
                />
            </Content>
            <Modal
                isVisible={visible}
                image={selectedDebt?.companylogo}
                close={() => { setVisible(false); setSelectedDebt(null); }}
                title="Pague agora com desconto e aumente seu Score!"
                sub={selectedDebt?.fullvalue}
                description={selectedDebt?.newvalue}
                action={() => {
                    dispatch(pay(selectedDebt?.id));
                    setVisible(false);
                    updateScore();
                }}
                actionText="Pagar agora"
            />
        </Container >
    )
}

export default DebtList;