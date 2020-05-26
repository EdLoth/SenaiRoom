import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../../assets/logo.png'

import styles from './styles';

export default function Home() {
    const navigation = useNavigation();

    function navigateToRoom() {
        navigation.navigate('Room');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Aulas Disponiveis: <Text style={styles.headerTextBold}>5 Aulas</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Reveja Aulas Gravadas e opte por cursos novos!</Text>

            <FlatList
                style={styles.HomeList}
                data={[1, 2, 3, 4, 5]}
                keyExtractor={home => String(home)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                   
                        <View style={styles.Home}>
                            <Text style={styles.HomeProperty}>Nome:</Text>
                            <Text style={styles.HomeValue}>CURSO JS RocketSeat</Text>

                            <Text style={styles.HomeProperty}>N° Aulas:</Text>
                            <Text style={styles.HomeValue}>10</Text>

                            <Text style={styles.HomeProperty}>N° Modulos</Text>
                            <Text style={styles.HomeValue}>1 Modulo</Text>

                            <TouchableOpacity
                                style={styles.roomButton}
                                onPress={navigateToRoom}
                            >

                                <Text style={styles.roomButtonText}>Veja mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#374192" />
                            </TouchableOpacity>
                        </View>
                
                    
                )}

            />

        </View>
    );
}