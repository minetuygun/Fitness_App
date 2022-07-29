import {Alert,SafeAreaView} from 'react-native';

import React, {useState} from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button';

export default function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHomeTown, setUserHomeTown] = useState(null);
  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHomeTown) {
      Alert.alert('Çiçek Fitness Salonu ', 'Bilgiler boş bırakılamaz');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHomeTown,
    };
   navigation.navigate('MemberResultScreen',{user});
  };

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üyenin ismini giriniz.."
        onchangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin soyismini giriniz.."
        onchangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin yaşını giriniz.."
        onchangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-postasını giriniz.."
        onchangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz.."
        onchangeText={setUserHomeTown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}
