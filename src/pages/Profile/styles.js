import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`

export const PageContainer = styled.ScrollView`
  padding-bottom: 100px;
  `
export const HeaderContainer = styled.View`
  background: ${colors.blue};
  height: 80px;
  flex-direction: row;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  margin-bottom: 55px;
`
export const SettingsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  position: absolute;
  right: 10;
  top: 10;

`
export const ProfileContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: -50;
  left: 20;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.View`
  width:103px;
  height:103px;
  border-radius: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
`
export const TextContainer = styled.View`
  margin-left: 15px;
  margin-top: 10px;
  `
export const Avatar = styled.Image`
  width:100px;
  height:100px;
  border-radius: 50px;
`
export const ProfileName = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: 'Usuazi-Hosomozi';
`
export const ProfilePoints = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 10px;
`

export const PackageContainer = styled.View`
  margin-left: 15px;
  align-items: flex-start;
  margin-bottom: 15px;
  `

export const PackageTitle = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 30px;
  font-family: 'Usuazi-Hosomozi';
  `
export const PackagePart = styled.View`
  flex-direction: row;
  `
export const PackageBox = styled.View`
  flex: 1;
  border: solid 1px #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-right:10px;
  `
export const PackageDays = styled.Text`
  color: #fff;
  font-size: 35px;
  font-family: 'Usuazi-Hosomozi';
  text-align: center;
  `
export const PackageAmount = styled.Text`
  color: #fff;
  font-size: 28px;
  font-family: 'Usuazi-Hosomozi';
  text-align: center;
  `
export const ChangePackage = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin:10px;
  width: 150px;
  elevation: 2;
  background-color: ${colors.blue};
  `
export const ChangeText = styled.Text`
  color: #fff;
  font-size: 35;
  font-family: 'Usuazi-Hosomozi';
  text-align: center;
  `
export const PackageCancel = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 10;
  elevation: 2;
  background: ${colors.blue};
  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.1);
  `
export const CancelText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: 'Usuazi-Hosomozi';
  `

export const PaymentContainer = styled.View`
  margin-left: 15px;
  align-items: flex-start;
  `

export const PaymentTitle = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 30px;
  font-family: 'Usuazi-Hosomozi';
  `
export const PaymentPart = styled.View`
  flex-direction: row;
  `
export const PaymentBox = styled.View`
  border: solid 1px #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin:10px;
  width: 110px;
  `
export const PaymentNumber = styled.Text`
  color: #fff;
  font-size: 35px;
  font-family: 'Usuazi-Hosomozi';
  `
export const PaymentMode = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: 'Usuazi-Hosomozi';
  `
export const ChangePayment = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin:10px;
  width: 150px;
  elevation: 2;
  background: ${colors.blue};
  `
export const ChangeTextPayment = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'Usuazi-Hosomozi';
  text-align: center;
  line-height: 32;
  `
export const PaymentCancel = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin:10px;
  padding: 15px;
  elevation: 2;
  background: ${colors.blue};
  `
