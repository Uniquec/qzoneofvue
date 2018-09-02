import axios from 'axios';

const HOST = "http://localhost:3030";

export function getPeople() {
  return axios.get(`${HOST}/visitors`)
};

export function getSmallTalks() {
  return axios.get(`${HOST}/smalltalks`)
};

export function setSmallTalks(data) {
  return axios.put(`${HOST}/smalltalks/${data.id}`, data)
}
