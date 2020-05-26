import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../../assets/logo.png'

import styles from './styles';
import * as MailComposer from 'expo-mail-composer';
import { MailComposerStatus } from 'expo-mail-composer';

export default function Room() {
    const navigation = useNavigation();
    const message = 'Olá Docente, Estou entrando em contato, pos gostaria de tirar uma duvidas.';

    function navigateBack() {
        navigation.goBack();
    }


    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Professor: Curso JS RocketSeat',
            recipients: ['gamersdx10@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL('whatsapp://send?phone=5507191576797=${message}');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={20} color="#374192" />
            </TouchableOpacity>
            </View>

    

            <View style={styles.Room}>
                <Text style={styles.HomeProperty}>Nome:</Text>
                <Text style={styles.HomeValue}>CURSO JS RocketSeat</Text>

                <Text style={styles.HomeProperty}>N° Aulas:</Text>
                <Text style={styles.HomeValue}>10</Text>

                <Text style={styles.HomeProperty}>N° Modulos</Text>
                <Text style={styles.HomeValue}>1 Modulo</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.roomTitle}>Entre em Contato</Text>
                <Text style={styles.roomTitle}>Seja o heroi</Text>

                <Text style={styles.roomDescription}>Tire suas duvidas com professor!</Text>

                <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}