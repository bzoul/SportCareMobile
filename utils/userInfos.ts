import axios from '../utils/axios';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface JWTDecode {
  userId: string;
  iat: number;
  exp: number;
}

export const fetchUserInfos = async () => {
  const token = (await AsyncStorage.getItem('token')) as unknown as string;
  const decoded = jwt_decode<JWTDecode>(token);
  const userId = decoded.userId;

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  if (token) {
    try {
      const response = await axios.get(`/users/${userId}`);

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
