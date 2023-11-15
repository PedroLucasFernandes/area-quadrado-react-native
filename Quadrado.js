import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';

const Quadrado = () => {
  const [lado, setLado] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularAreaQuadrado = () => {
    const area = lado * lado;
    setResultado(area);
  };

  const onPress = () => {
    calcularAreaQuadrado();

    Alert.alert(
      "Resultado",
      `Área do Quadrado: ${resultado}`,
      [{ text: "Fechar" }]
    );
  };

  useEffect(() => {
    calcularAreaQuadrado();
  },
  [lado],
  );

  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
        Cálculo de área do Quadrado
      </Text>
      
      <View style={{ alignItems: 'center', marginTop: 20 }}>

      <Image
          source={require('./assets/quadrado.png')}
          style={{ width: 150, height: 150 }}
        />

        <TextInput
          keyboardType="numeric"
          onChangeText={(value) => setLado(parseFloat(value))}
          placeholder="Lado do Quadrado"
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            marginTop: 10,
          }}
        />

        <View style={{ marginTop: 20, width: 160 }}>
          <Button
            onPress={onPress}
            title="Calcular"
            color="#ADD8E6"
          />
        </View>
      </View>
    </View>
  );
};

export default Quadrado;