import axios from 'axios';
const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';

export const apiTableData = (tableName) => {
  return axios({
    method: 'post',
    url: baseURL + '/console/data/resources/stat/getTravelAndWBDate.do?tableNames=' + tableName,
  }).then(res => res)
}

export const apiDataTable = (tableName, params) => {
  return axios({
    method: 'post',
    url: baseURL + '/console/data/standard/table/' + tableName,
    params: params
  }).then(res => res)
}

export const apiMetaData = (tableName, params) => {
  return axios({
    method: 'post',
    url: baseURL + '/console/data/standard/' + tableName,
    params: params
  }).then(res => res)
}

export const apiCodeData = (tableName, params) => {
  return axios({
    method: 'post',
    url: baseURL + '/console/data/standard/codeset/' + tableName,
    params: params
  }).then(res => res)
}



