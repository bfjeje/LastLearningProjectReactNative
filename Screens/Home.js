import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.0.2:3000/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => alert('Error: ' + error));
  }, []);
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20}}>Cadastro de Estoque</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{fontSize: 15, color: 'blue'}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{padding: 20}}
        keyExtractor={(item, index) => item.id.toString()}
        data={products}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginBottom: 5,
            }}>
            <Image
              source={{uri: item.img ? item.img : null}}
              style={{width: 100, height: 100, margin: 10, borderRadius: 10}}
            />
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
              <Text>Produto: {item.titulo}</Text>
              <Text>Modelo: {item.modelo}</Text>
              <Text>Categoria: {item.categoria}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Home;
