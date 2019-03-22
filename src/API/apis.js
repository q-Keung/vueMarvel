import axios from '../utils/request'

export function getMarvelWaterFall() {
  return axios.get('/getMarvelWaterfall');
}
export function getMarvelTables() {
  return axios.get('/getMarvelTable');
}
 export function getMarvelVideo(){
     return axios.get('/getMarvelVideo')
 }
 export function getMarvelTimeLine(){
    return axios.get('/getMarvelTimeLine');
 }