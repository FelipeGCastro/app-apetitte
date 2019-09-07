import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '~/store/ducks/user';

import {
  Container,
  PageContainer,
  ImageContainer,
  HeaderContainer,
  SettingsButton,
  ProfileContainer,
  Avatar,
  TextContainer,
  ProfileName,
  ProfilePoints,
  PackageContainer,
  PackageTitle,
  PackagePart,
  PackageBox,
  PackageDays,
  PackageAmount,
  ChangePackage,
  ChangeText,
  PackageCancel,
  CancelText,
  PaymentContainer,
  PaymentTitle,
  PaymentPart,
  PaymentBox,
  PaymentNumber,
  PaymentMode,
  ChangePayment,
  ChangeTextPayment,
  PaymentCancel,
} from './styles';

class Profile extends Component {
  componentDidMount = () => {}

  render() {
    const { user } = this.props;
    return (
      <Container>
        <PageContainer>
          <HeaderContainer>
            <SettingsButton>
              <Icon name="settings" size={30} color="#fff" />
            </SettingsButton>
            <ProfileContainer>
              <ImageContainer>
                <Avatar source={{ uri: user.avatar }} resizeMode="cover" />
              </ImageContainer>
              <TextContainer>
                <ProfileName>{user.name}</ProfileName>
                <ProfilePoints>Lisboa</ProfilePoints>
              </TextContainer>
            </ProfileContainer>
          </HeaderContainer>
          <PackageContainer>
            <PackageTitle>Pacote</PackageTitle>
            <PackagePart>
              <PackageBox>
                <PackageDays>{user.days} Dias</PackageDays>
                <PackageAmount>{user.planName}
                </PackageAmount>
              </PackageBox>
              <ChangePackage>
                <ChangeText>Alterar Pacote</ChangeText>
              </ChangePackage>
            </PackagePart>
            <PackageCancel>
              <CancelText>Cancelar Adesão</CancelText>
            </PackageCancel>
          </PackageContainer>
          <PaymentContainer>
            <PaymentTitle>Pagamentos</PaymentTitle>
            <PaymentPart>
              <PaymentBox>
                <PaymentNumber>7669</PaymentNumber>
                <PaymentMode>Visa</PaymentMode>
              </PaymentBox>
              <ChangePayment>
                <ChangeTextPayment>Atualizar Pagamento</ChangeTextPayment>
              </ChangePayment>
            </PaymentPart>
            <PaymentCancel>
              <CancelText>Remover Pagamento</CancelText>
            </PaymentCancel>
          </PaymentContainer>
        </PageContainer>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
