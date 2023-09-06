import axios from 'axios';
import { Mission } from '../Entities/Mission';

const API_BASE_URL = 'http://localhost:3032';

const getResourceUrl = (route: string) => {
  const routes = require('../Persistence/routes.json');
  return routes[route];
};

export const createMission = async (mission: Mission): Promise<Mission> => {
  try {
    const route = '/missions/save';
    const resourceUrl = getResourceUrl(route);
    const response = await axios.post(`${API_BASE_URL}${resourceUrl}`, mission);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllMissions = async (): Promise<Mission[]> => {
  try {
    const route = '/missions';
    const resourceUrl = getResourceUrl(route);

    const response = await axios.get(`${API_BASE_URL}${resourceUrl}?state=true`);

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateMission = async (mission: Mission): Promise<Mission> => {
  try {
    const route = `/missions/${mission.id}`;
    const resourceUrl = getResourceUrl(route);
    const response = await axios.put(`${API_BASE_URL}${resourceUrl}`, mission);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMission = async (missionId: string): Promise<void> => {
  try {
    const route = `/missions/delete/:id`;
    const resourceUrl = getResourceUrl(route);
    const response = await axios.patch(`${API_BASE_URL}${resourceUrl.replace(':id', missionId)}`, { state: false, updatedAt: new Date() });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  createMission,
  getAllMissions,
  updateMission,
  deleteMission,
};
